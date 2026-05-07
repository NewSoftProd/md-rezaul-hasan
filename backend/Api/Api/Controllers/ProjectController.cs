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
                HasMainImage = p.MainImage != null,
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
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> Update(int id, [FromForm] ProjectUpdateDto updateDto)
    {
        var project = await _context.Projects.FindAsync(id);
        if (project == null) return NotFound();

        // Update Text Fields
        project.Title = updateDto.Title ?? string.Empty;
        project.Description = updateDto.Description ?? string.Empty;
        project.FullDescription = updateDto.FullDescription ?? string.Empty;
        project.TechStack = updateDto.TechStack ?? Array.Empty<string>();
        project.Status = updateDto.Status ?? ProjectStatus.Current;
        project.LiveUrl = updateDto.LiveUrl ?? string.Empty;
        project.RepoUrl = updateDto.RepoUrl ?? string.Empty;
        project.Year = updateDto.Year ?? string.Empty;
        project.Role = updateDto.Role ?? string.Empty;
        project.KeyFeatures = updateDto.KeyFeatures ?? string.Empty;
        project.Challenges = updateDto.Challenges ?? string.Empty;
        project.Solutions = updateDto.Solutions ?? string.Empty;
        project.Impact = updateDto.Impact ?? string.Empty;
        project.Learnings = updateDto.Learnings ?? Array.Empty<string>();

        // Logic for updating images: 
        // If a new main image is provided, replace it.
        if (updateDto.MainImage != null)
        {
            project.MainImage = await GetFileBytes(updateDto.MainImage);
        }

        // For additional images, this logic appends new ones. 
        // To replace them entirely, call project.AdditionalImages.Clear() first.
        if (updateDto.AdditionalImages.Any())
        {
            foreach (var file in updateDto.AdditionalImages)
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

    // PATCH: api/Project/5
    [HttpPatch("{id}")]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> Patch(int id, [FromForm] ProjectUpdateDto updateDto)
    {
        var project = await _context.Projects.FindAsync(id);
        if (project == null) return NotFound();

        // Update Text Fields only if provided (not null or not default)
        if (!string.IsNullOrEmpty(updateDto.Title)) project.Title = updateDto.Title;
        if (!string.IsNullOrEmpty(updateDto.Description)) project.Description = updateDto.Description;
        if (!string.IsNullOrEmpty(updateDto.FullDescription)) project.FullDescription = updateDto.FullDescription;
        if (updateDto.TechStack != null && updateDto.TechStack.Any()) project.TechStack = updateDto.TechStack;
        
        // Status is an enum, we only update it if it's provided.
        if (updateDto.Status.HasValue) project.Status = updateDto.Status.Value;

        if (!string.IsNullOrEmpty(updateDto.LiveUrl)) project.LiveUrl = updateDto.LiveUrl;
        if (!string.IsNullOrEmpty(updateDto.RepoUrl)) project.RepoUrl = updateDto.RepoUrl;
        if (!string.IsNullOrEmpty(updateDto.Year)) project.Year = updateDto.Year;
        if (!string.IsNullOrEmpty(updateDto.Role)) project.Role = updateDto.Role;
        if (updateDto.KeyFeatures != null) project.KeyFeatures = updateDto.KeyFeatures;
        if (updateDto.Challenges != null) project.Challenges = updateDto.Challenges;
        if (updateDto.Solutions != null) project.Solutions = updateDto.Solutions;
        if (updateDto.Impact != null) project.Impact = updateDto.Impact;
        if (updateDto.Learnings != null && updateDto.Learnings.Any()) project.Learnings = updateDto.Learnings;

        // Logic for updating images: 
        if (updateDto.MainImage != null)
        {
            project.MainImage = await GetFileBytes(updateDto.MainImage);
        }

        if (updateDto.AdditionalImages != null && updateDto.AdditionalImages.Any())
        {
            foreach (var file in updateDto.AdditionalImages)
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