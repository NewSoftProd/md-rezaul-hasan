using System;
using System.Collections.Generic;

namespace backend.Models;

public class Education
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string StartDate { get; set; } = string.Empty;
    public string EndDate { get; set; } = string.Empty;
    
    public ICollection<Skill> Skills { get; set; } = new List<Skill>();
}
    