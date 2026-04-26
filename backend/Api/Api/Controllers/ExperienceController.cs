using Api.Data;
using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExperienceController:ControllerBase
{
      private readonly AppDbContext _context;

    public ExperienceController(AppDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetExperience()
    {
        var experience = await _context.Experiences.ToListAsync();
        if (!experience.Any()) return NotFound(); 
        return Ok(experience);
    }
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetExperienceById(int id)
    {
        var experience = await _context.Experiences.FindAsync(id);
        if (experience == null) return NotFound();
        return Ok(experience);
    }

    [HttpPost]
    public async Task<IActionResult> CreateExperience([FromBody] ExperienceDto experienceDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var experience = new Experience
        {
            Title = experienceDto.Title,
            Company = experienceDto.Company,
            StartDate = experienceDto.StartDate,
            EndDate = experienceDto.EndDate,
            Description = experienceDto.Description,
            Skills = experienceDto.Skills,
            CreatedAt = DateTime.UtcNow
        };

        _context.Experiences.Add(experience);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetExperienceById), new { id = experience.Id }, experience);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateExperience(int id, [FromBody] ExperienceDto experienceDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var experience = await _context.Experiences.FindAsync(id);
        if (experience == null)
            return NotFound();

        experience.Title = experienceDto.Title;
        experience.Company = experienceDto.Company;
        experience.Description = experienceDto.Description;
        experience.Skills = experienceDto.Skills;
        experience.EndDate = experienceDto.EndDate;
        experience.StartDate = experienceDto.StartDate;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteExperience(int id)
    {
        var experience = await _context.Experiences.FindAsync(id);
        if (experience == null)
            return NotFound();

        _context.Experiences.Remove(experience);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}