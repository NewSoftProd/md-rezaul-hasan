using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using System;
using System.Collections.Generic;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SkillController : ControllerBase
{
    // Mock data storage - replace with database later
    private static List<SkillDTO> skills = new();

    /// <summary>
    /// Get all skill records
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<SkillDTO>> GetAll()
    {
        return Ok(skills);
    }

    /// <summary>
    /// Get skill record by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<SkillDTO> GetById(Guid id)
    {
        var skill = skills.Find(s => s.Id == id);
        if (skill == null)
            return NotFound();
        return Ok(skill);
    }

    /// <summary>
    /// Create a new skill record
    /// </summary>
    [HttpPost]
    public ActionResult<SkillDTO> Create(SkillDTO skillDTO)
    {
        skillDTO.Id = Guid.NewGuid();
        skills.Add(skillDTO);
        return CreatedAtAction(nameof(GetById), new { id = skillDTO.Id }, skillDTO);
    }

    /// <summary>
    /// Update a skill record
    /// </summary>
    [HttpPut("{id}")]
    public IActionResult Update(Guid id, SkillDTO skillDTO)
    {
        var skill = skills.Find(s => s.Id == id);
        if (skill == null)
            return NotFound();

        skill.Category = skillDTO.Category;
        skill.Skills = skillDTO.Skills;

        return NoContent();
    }

    /// <summary>
    /// Delete a skill record
    /// </summary>
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var skill = skills.Find(s => s.Id == id);
        if (skill == null)
            return NotFound();

        skills.Remove(skill);
        return NoContent();
    }
}
