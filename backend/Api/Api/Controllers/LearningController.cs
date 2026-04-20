using Api.Data;
using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LearningController : ControllerBase
{
    private readonly AppDbContext _context;

    public LearningController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetLearningTopicById(int id)
    {
        var learning = await _context.Learnings.FindAsync(id);
        if (learning == null) return NotFound();
        return Ok(learning);
    }

    [HttpPost]
    public async Task<IActionResult> CreateLearningTopic([FromBody] LearningDto learningDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var learning = new Learning
        {
            Name = learningDto.Name,
            Description = learningDto.Description,
            Status = learningDto.Status,
            CreatedAt = DateTime.UtcNow
        };

        _context.Learnings.Add(learning);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetLearningTopicById), new { id = learning.Id }, learning);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateLearningTopic(int id, [FromBody] LearningDto learningDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var learning = await _context.Learnings.FindAsync(id);
        if (learning == null)
            return NotFound();

        learning.Name = learningDto.Name;
        learning.Description = learningDto.Description;
        learning.Status = learningDto.Status;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteLearningTopic(int id)
    {
        var learning = await _context.Learnings.FindAsync(id);
        if (learning == null)
            return NotFound();

        _context.Learnings.Remove(learning);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
