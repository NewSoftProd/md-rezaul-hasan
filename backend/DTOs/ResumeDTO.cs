using System;
using System.Collections.Generic;

namespace backend.DTOs;

public class ResumeDTO
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public ContactInfo Contact { get; set; } = new();
    public List<ExperienceDTO> Experience { get; set; } = new();
    public List<EducationDTO> Education { get; set; } = new();
    public List<ProjectDTO> Projects { get; set; } = new();
    public List<SkillDTO> Skills { get; set; } = new();
}

public class ContactInfo
{
    public string Email { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string Website { get; set; } = string.Empty;
}

