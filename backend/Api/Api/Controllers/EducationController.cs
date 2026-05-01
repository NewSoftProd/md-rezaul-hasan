using Api.Data;
using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EducationController:ControllerBase
{
    private readonly AppDbContext _context;

    public EducationController(AppDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetEducation()
    {
        var education = await _context.Educations.ToListAsync();
        if (!education.Any()) return NotFound(); 
        return Ok(education);
    }
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetEducationById(int id)
    {
        var education = await _context.Educations.FindAsync(id);
        if (education == null) return NotFound();
        return Ok(education);
    }

    [HttpPost]
    public async Task<IActionResult> CreateEducation([FromBody] EducationDto educationDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var education = new Education
        {
            Title = educationDto.Title,
            Company = educationDto.Company,
            StartDate = educationDto.StartDate,
            EndDate = educationDto.EndDate,
            Description = educationDto.Description,
            Skills = educationDto.Skills,
            CreatedAt = DateTime.UtcNow
        };

        _context.Educations.Add(education);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetEducationById), new { id = education.Id }, education);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateEducation(int id, [FromBody] EducationDto educationDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var education = await _context.Educations.FindAsync(id);
        if (education == null)
            return NotFound();

        education.Title = educationDto.Title;
        education.Company = educationDto.Company;
        education.Description = educationDto.Description;
        education.Skills = educationDto.Skills;
        education.EndDate = educationDto.EndDate;
        education.StartDate = educationDto.StartDate;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteEducation(int id)
    {
        var education = await _context.Educations.FindAsync(id);
        if (education == null)
            return NotFound();

        _context.Educations.Remove(education);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}