using System;
using System.Collections.Generic;

namespace backend.Models;

public class User
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    
    // Navigation properties
    public ICollection<Learning> Learnings { get; set; } = new List<Learning>();
    public ICollection<Project> Projects { get; set; } = new List<Project>();
}
