
using Api.Data;
using Api.Models;
using Api.Response;
using Microsoft.EntityFrameworkCore;


namespace Api.Services;

public interface IResumeService
{
    Task<ResumeResponse> GetFullResumeDataAsync();
    Task<List<Experience>> GetExperiencesAsync();
    Task<List<Education>> GetEducationsAsync();
    Task<List<SkillCategory>> GetSkillCategoriesAsync();
    Task<List<Project>> GetProjectsAsync();
}

public class ResumeService : IResumeService
{
    private readonly AppDbContext _context;

    public ResumeService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<ResumeResponse> GetFullResumeDataAsync()
    {
        var experiences = await GetExperiencesAsync();
        var educations = await GetEducationsAsync();
        var skills = await GetSkillCategoriesAsync();
        var projects = await GetProjectsAsync();

        return new ResumeResponse
        {
            Name = "MD. Rezaul Hasan",
            Title = "Senior Software Engineer",
            Summary = "Experienced software engineer with 8+ years in web development...",
            Contact = new Contact
            {
                Email = "rezaul@example.com",
                Location = "Stockholm, Sweden",
                Website = "rezaulhasan.com"
            },
            Experience = experiences.Select(exp => new Experience
            {
                Title = exp.Title,
                Company = exp.Company,
                StartDate = exp.StartDate,
                EndDate = exp.EndDate,
                Description = exp.Description,
                Skills = exp.Skills,
            }).ToList(),
            Education = educations.Select(edu => new Education
            {
                Title = edu.Title,
                Company = edu.Company,
                StartDate= edu.StartDate,
                EndDate = edu.EndDate,
                Description = edu.Description,
                Skills = edu.Skills,
            }).ToList(),
            Projects = projects.Select(proj => new Project
            {
                Title = proj.Title,
                Description = proj.Description,
                TechStack = proj.TechStack,
                Year = proj.Year,
                MainImage = proj.MainImage,
                Status = proj.Status,
                LiveUrl = proj.LiveUrl,
                RepoUrl = proj.RepoUrl
            }).ToList(),
             Skills = skills.SelectMany(cat => cat.Skills).ToList()
        };
    }

    public async Task<List<Experience>> GetExperiencesAsync()
    {
        return await _context.Experiences
            .OrderByDescending(e => e.StartDate)
            .ToListAsync<Experience>();
    }

    public async Task<List<Education>> GetEducationsAsync()
    {
        return await _context.Educations
            .OrderByDescending(e => e.StartDate)
            .ToListAsync<Education>();
    }

    public async Task<List<SkillCategory>> GetSkillCategoriesAsync()
    {
        return await _context.SkillCategories
            .ToListAsync<SkillCategory>();
    }

    public async Task<List<Project>> GetProjectsAsync()
    {
        return await _context.Projects
            .OrderByDescending(p => p.Year)
            .ToListAsync<Project>();
    }
}