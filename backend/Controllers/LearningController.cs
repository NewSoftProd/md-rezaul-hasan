using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System;
using System.Collections.Generic;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LearningController : ControllerBase
{
    // Mock data storage - replace with database later
    private static List<Learning> learnings = new();

    /// <summary>
    /// Get all learning records
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<Learning>> GetAll()
    {
        return Ok(learnings);
    }

    /// <summary>
    /// Get learning record by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<Learning> GetById(Guid id)
    {
        var learning = learnings.Find(l => l.Id == id);
        if (learning == null)
            return NotFound();
        return Ok(learning);
    }

    /// <summary>
    /// Create a new learning record
    /// </summary>
    [HttpPost]
    public ActionResult<Learning> Create(Learning learning)
    {
        learning.Id = Guid.NewGuid();
        learnings.Add(learning);
        return CreatedAtAction(nameof(GetById), new { id = learning.Id }, learning);
    }

    /// <summary>
    /// Update a learning record
    /// </summary>
    [HttpPut("{id}")]
    public IActionResult Update(Guid id, Learning learning)
    {
        var existingLearning = learnings.Find(l => l.Id == id);
        if (existingLearning == null)
            return NotFound();

        existingLearning.Name = learning.Name;
        existingLearning.Description = learning.Description;
        existingLearning.Status = learning.Status;
        existingLearning.UserId = learning.UserId;

        return NoContent();
    }

    /// <summary>
    /// Delete a learning record
    /// </summary>
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var learning = learnings.Find(l => l.Id == id);
        if (learning == null)
            return NotFound();

        learnings.Remove(learning);
        return NoContent();
    }
}
