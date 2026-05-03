using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ImageBlobApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProjectController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/Project
    [HttpGet]
    public async Task<ActionResult<IEnumerable<object>>> GetAll()
    {
        // We return a projection to avoid sending huge BLOB strings in a list view
        return await _context.Projects
            .Select(p => new { 
                p.Id, 
                p.Title, 
                p.Description, 
                p.Year, 
                p.Status,
                HasMainImage = p.MainImage != null 
            })
            .ToListAsync();
    }

    // GET: api/Project/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Project>> GetById(int id)
    {
        var project = await _context.Projects.FindAsync(id);
        if (project == null) return NotFound();
        return project;
    }

    // POST: api/Project
    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<ActionResult<Project>> Create([FromForm] ProjectDto dto)
    {
        var project = new Project
        {
            Title = dto.Title,
            Description = dto.Description,
            FullDescription = dto.FullDescription,
            TechStack = dto.TechStack,
            Status = dto.Status,
            LiveUrl = dto.LiveUrl,
            RepoUrl = dto.RepoUrl,
            Year = dto.Year,
            Role = dto.Role,
            KeyFeatures = dto.KeyFeatures,
            Challenges = dto.Challenges,
            Solutions = dto.Solutions,
            Impact = dto.Impact,
            Learnings = dto.Learnings
        };

        // Process Main Image
        if (dto.MainImage != null)
        {
            project.MainImage = await GetFileBytes(dto.MainImage);
        }

        // Process Additional Images
        foreach (var file in dto.AdditionalImages)
        {
            project.AdditionalImages.Add(await GetFileBytes(file));
        }

        _context.Projects.Add(project);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = project.Id }, project);
    }

    // PUT: api/Project/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromForm] ProjectDto dto)
    {
        var project = await _context.Projects.FindAsync(id);
        if (project == null) return NotFound();

        // Update Text Fields
        project.Title = dto.Title;
        project.Description = dto.Description;
        project.FullDescription = dto.FullDescription;
        project.TechStack = dto.TechStack;
        project.Status = dto.Status;
        project.LiveUrl = dto.LiveUrl;
        project.RepoUrl = dto.RepoUrl;
        project.Year = dto.Year;
        project.Role = dto.Role;
        project.KeyFeatures = dto.KeyFeatures;
        project.Challenges = dto.Challenges;
        project.Solutions = dto.Solutions;
        project.Impact = dto.Impact;
        project.Learnings = dto.Learnings;

        // Logic for updating images: 
        // If a new main image is provided, replace it.
        if (dto.MainImage != null)
        {
            project.MainImage = await GetFileBytes(dto.MainImage);
        }

        // For additional images, this logic appends new ones. 
        // To replace them entirely, call project.AdditionalImages.Clear() first.
        if (dto.AdditionalImages.Any())
        {
            foreach (var file in dto.AdditionalImages)
            {
                project.AdditionalImages.Add(await GetFileBytes(file));
            }
        }

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Projects.Any(e => e.Id == id)) return NotFound();
            throw;
        }

        return NoContent();
    }

    // DELETE: api/Project/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var project = await _context.Projects.FindAsync(id);
        if (project == null) return NotFound();

        _context.Projects.Remove(project);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private static async Task<byte[]> GetFileBytes(IFormFile file)
    {
        using var ms = new MemoryStream();
        await file.CopyToAsync(ms);
        return ms.ToArray();
    }
}