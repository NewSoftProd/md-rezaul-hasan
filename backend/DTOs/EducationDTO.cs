using System;

namespace backend.DTOs;

public class EducationDTO
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string StartDate { get; set; } = string.Empty;
    public string EndDate { get; set; } = string.Empty;
    public List<SkillDTO> Skills { get; set; } = new();
}
