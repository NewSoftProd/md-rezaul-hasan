using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using System;
using System.Collections.Generic;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExperienceController : ControllerBase
{
    // Mock data storage - replace with database later
    private static List<ExperienceDTO> experiences = new();

    /// <summary>
    /// Get all experience records
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<ExperienceDTO>> GetAll()
    {
        return Ok(experiences);
    }

    /// <summary>
    /// Get experience record by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<ExperienceDTO> GetById(Guid id)
    {
        var experience = experiences.Find(e => e.Id == id);
        if (experience == null)
            return NotFound();
        return Ok(experience);
    }

    /// <summary>
    /// Create a new experience record
    /// </summary>
    [HttpPost]
    public ActionResult<ExperienceDTO> Create(ExperienceDTO experienceDTO)
    {
        experienceDTO.Id = Guid.NewGuid();
        experiences.Add(experienceDTO);
        return CreatedAtAction(nameof(GetById), new { id = experienceDTO.Id }, experienceDTO);
    }

    /// <summary>
    /// Update an experience record
    /// </summary>
    [HttpPut("{id}")]
    public IActionResult Update(Guid id, ExperienceDTO experienceDTO)
    {
        var experience = experiences.Find(e => e.Id == id);
        if (experience == null)
            return NotFound();

        experience.Title = experienceDTO.Title;
        experience.Company = experienceDTO.Company;
        experience.StartDate = experienceDTO.StartDate;
        experience.EndDate = experienceDTO.EndDate;
        experience.Description = experienceDTO.Description;
        experience.Skills = experienceDTO.Skills;

        return NoContent();
    }

    /// <summary>
    /// Delete an experience record
    /// </summary>
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var experience = experiences.Find(e => e.Id == id);
        if (experience == null)
            return NotFound();

        experiences.Remove(experience);
        return NoContent();
    }
}
