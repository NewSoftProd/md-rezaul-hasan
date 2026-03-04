using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using System;
using System.Collections.Generic;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectController : ControllerBase
{
    // Mock data storage - replace with database later
    private static List<ProjectDTO> projects = new();

    /// <summary>
    /// Get all project records
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<ProjectDTO>> GetAll()
    {
        return Ok(projects);
    }

    /// <summary>
    /// Get project record by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<ProjectDTO> GetById(Guid id)
    {
        var project = projects.Find(p => p.Id == id);
        if (project == null)
            return NotFound();
        return Ok(project);
    }

    /// <summary>
    /// Create a new project record
    /// </summary>
    [HttpPost]
    public ActionResult<ProjectDTO> Create(ProjectDTO projectDTO)
    {
        projectDTO.Id = Guid.NewGuid();
        projects.Add(projectDTO);
        return CreatedAtAction(nameof(GetById), new { id = projectDTO.Id }, projectDTO);
    }

    /// <summary>
    /// Update a project record
    /// </summary>
    [HttpPut("{id}")]
    public IActionResult Update(Guid id, ProjectDTO projectDTO)
    {
        var project = projects.Find(p => p.Id == id);
        if (project == null)
            return NotFound();

        project.Title = projectDTO.Title;
        project.Description = projectDTO.Description;
        project.FullDescription = projectDTO.FullDescription;
        project.ImageUrl = projectDTO.ImageUrl;
        project.ImageGallery = projectDTO.ImageGallery;
        project.TechStack = projectDTO.TechStack;
        project.Status = projectDTO.Status;
        project.LiveUrl = projectDTO.LiveUrl;
        project.RepoUrl = projectDTO.RepoUrl;
        project.Year = projectDTO.Year;
        project.Role = projectDTO.Role;
        project.KeyFeatures = projectDTO.KeyFeatures;
        project.Challenges = projectDTO.Challenges;
        project.Solutions = projectDTO.Solutions;
        project.Impact = projectDTO.Impact;
        project.Learnings = projectDTO.Learnings;

        return NoContent();
    }

    /// <summary>
    /// Delete a project record
    /// </summary>
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var project = projects.Find(p => p.Id == id);
        if (project == null)
            return NotFound();

        projects.Remove(project);
        return NoContent();
    }
}
