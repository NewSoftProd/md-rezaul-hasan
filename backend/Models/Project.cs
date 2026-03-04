using System;
using System.Runtime.Serialization;

namespace backend.Models;

public class Project
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string FullDescription { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string[] ImageGallery { get; set; } = Array.Empty<string>();
    public string[] TechStack { get; set; } = Array.Empty<string>();
    public ProjectStatus Status { get; set; } = ProjectStatus.Current;
    public string LiveUrl { get; set; } = string.Empty;
    public string RepoUrl { get; set; } = string.Empty;
    public string Year { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string[] KeyFeatures { get; set; } = Array.Empty<string>();
    public string[] Challenges { get; set; } = Array.Empty<string>();
    public string[] Solutions { get; set; } = Array.Empty<string>();
    public string Impact { get; set; } = string.Empty;
    public string[] Learnings { get; set; } = Array.Empty<string>();
    
    // Foreign key
    public Guid UserId { get; set; }
    
    // Navigation property
    public User? User { get; set; }
}

public enum ProjectStatus
{
    [EnumMember(Value = "Current")]
    Current,
    [EnumMember(Value = "Completed")]
    Completed
}
