using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using System;
using System.Collections.Generic;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EducationController : ControllerBase
{
    // Mock data storage - replace with database later
    private static List<EducationDTO> educations = new();

    /// <summary>
    /// Get all education records
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<EducationDTO>> GetAll()
    {
        return Ok(educations);
    }

    /// <summary>
    /// Get education record by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<EducationDTO> GetById(Guid id)
    {
        var education = educations.Find(e => e.Id == id);
        if (education == null)
            return NotFound();
        return Ok(education);
    }

    /// <summary>
    /// Create a new education record
    /// </summary>
    [HttpPost]
    public ActionResult<EducationDTO> Create(EducationDTO educationDTO)
    {
        educationDTO.Id = Guid.NewGuid();
        educations.Add(educationDTO);
        return CreatedAtAction(nameof(GetById), new { id = educationDTO.Id }, educationDTO);
    }

    /// <summary>
    /// Update an education record
    /// </summary>
    [HttpPut("{id}")]
    public IActionResult Update(Guid id, EducationDTO educationDTO)
    {
        var education = educations.Find(e => e.Id == id);
        if (education == null)
            return NotFound();

        education.Title = educationDTO.Title;
        education.Company = educationDTO.Company;
        education.Description = educationDTO.Description;
        education.StartDate = educationDTO.StartDate;
        education.EndDate = educationDTO.EndDate;
        education.Skills = educationDTO.Skills;

        return NoContent();
    }

    /// <summary>
    /// Delete an education record
    /// </summary>
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var education = educations.Find(e => e.Id == id);
        if (education == null)
            return NotFound();

        educations.Remove(education);
        return NoContent();
    }
}
