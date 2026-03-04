using System;
using System.Collections.Generic;

namespace backend.Models;

public class Skill
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    
    // Foreign key to Experience (one skill belongs to one experience)
    public Guid? ExperienceId { get; set; }
    
    // Foreign key to Education (one skill belongs to one education)
    public Guid? EducationId { get; set; }
    
    // Navigation properties
    public Experience? Experience { get; set; }
    public Education? Education { get; set; }
}
