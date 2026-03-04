using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using System;
using System.Collections.Generic;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResumeController : ControllerBase
{
    // Mock data storage - replace with database later
    private static List<ResumeDTO> resumes = new();

    /// <summary>
    /// Get all resume records
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<ResumeDTO>> GetAll()
    {
        return Ok(resumes);
    }

    /// <summary>
    /// Get resume record by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<ResumeDTO> GetById(Guid id)
    {
        var resume = resumes.Find(r => r.Id == id);
        if (resume == null)
            return NotFound();
        return Ok(resume);
    }

    /// <summary>
    /// Create a new resume record
    /// </summary>
    [HttpPost]
    public ActionResult<ResumeDTO> Create(ResumeDTO resumeDTO)
    {
        resumeDTO.Id = Guid.NewGuid();
        resumes.Add(resumeDTO);
        return CreatedAtAction(nameof(GetById), new { id = resumeDTO.Id }, resumeDTO);
    }

    /// <summary>
    /// Update a resume record
    /// </summary>
    [HttpPut("{id}")]
    public IActionResult Update(Guid id, ResumeDTO resumeDTO)
    {
        var resume = resumes.Find(r => r.Id == id);
        if (resume == null)
            return NotFound();

        resume.Name = resumeDTO.Name;
        resume.Title = resumeDTO.Title;
        resume.Summary = resumeDTO.Summary;
        resume.Contact = resumeDTO.Contact;
        resume.Experience = resumeDTO.Experience;
        resume.Education = resumeDTO.Education;
        resume.Projects = resumeDTO.Projects;
        resume.Skills = resumeDTO.Skills;

        return NoContent();
    }

    /// <summary>
    /// Delete a resume record
    /// </summary>
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var resume = resumes.Find(r => r.Id == id);
        if (resume == null)
            return NotFound();

        resumes.Remove(resume);
        return NoContent();
    }
}
