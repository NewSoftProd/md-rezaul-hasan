    using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System;
using System.Collections.Generic;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NavigationController : ControllerBase
{
    // Mock data storage - replace with database later
    private static List<Navgation> navigations = new();

    /// <summary>
    /// Get all navigation records
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<Navgation>> GetAll()
    {
        return Ok(navigations);
    }

    /// <summary>
    /// Get navigation record by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<Navgation> GetById(Guid id)
    {
        var navigation = navigations.Find(n => n.Id == id);
        if (navigation == null)
            return NotFound();
        return Ok(navigation);
    }

    /// <summary>
    /// Create a new navigation record
    /// </summary>
    [HttpPost]
    public ActionResult<Navgation> Create(Navgation navigation)
    {
        navigation.Id = Guid.NewGuid();
        navigations.Add(navigation);
        return CreatedAtAction(nameof(GetById), new { id = navigation.Id }, navigation);
    }

    /// <summary>
    /// Update a navigation record
    /// </summary>
    [HttpPut("{id}")]
    public IActionResult Update(Guid id, Navgation navigation)
    {
        var existingNavigation = navigations.Find(n => n.Id == id);
        if (existingNavigation == null)
            return NotFound();

        existingNavigation.Label = navigation.Label;
        existingNavigation.Href = navigation.Href;

        return NoContent();
    }

    /// <summary>
    /// Delete a navigation record
    /// </summary>
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var navigation = navigations.Find(n => n.Id == id);
        if (navigation == null)
            return NotFound();

        navigations.Remove(navigation);
        return NoContent();
    }
}
