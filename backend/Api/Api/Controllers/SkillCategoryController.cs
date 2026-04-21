using Api.Data;
using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SkillCategoryController:ControllerBase
{
    private readonly AppDbContext _context;

    public SkillCategoryController(AppDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetSkillCategory()
    {
        var skillCategory = await _context.SkillCategories.ToListAsync();
        if (!skillCategory.Any()) return NotFound(); 
        return Ok(skillCategory);
    }
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetSkillCategoryById(int id)
    {
        var skillCategory = await _context.SkillCategories.FindAsync(id);
        if (skillCategory == null) return NotFound();
        return Ok(skillCategory);
    }

    [HttpPost]
    public async Task<IActionResult> CreateSkillCategory([FromBody] SkillCategoryDto skillCategoryDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var skillCategory = new SkillCategory
        {
            Category = skillCategoryDto.Category,
            Skills = skillCategoryDto.Skills,
            CreatedAt = DateTime.UtcNow
        };

        _context.SkillCategories.Add(skillCategory);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetSkillCategoryById), new { id = skillCategory.Id }, skillCategory);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateSkillCategory(int id, [FromBody] SkillCategoryDto SkillCategoryDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var skillCategory = await _context.SkillCategories.FindAsync(id);
        if (skillCategory == null)
            return NotFound();

        skillCategory.Category = SkillCategoryDto.Category;
        skillCategory.Skills = SkillCategoryDto.Skills;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteSkillCategory(int id)
    {
        var skillCategory = await _context.SkillCategories.FindAsync(id);
        if (skillCategory == null)
            return NotFound();

        _context.SkillCategories.Remove(skillCategory);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}