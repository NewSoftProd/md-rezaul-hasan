using System.Runtime.Serialization;

namespace Api.Models;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string FullDescription { get; set; }
    
    // Single image stored as a BLOB
    public byte[]? MainImage { get; set; }
    
    // Array of images stored as a BLOB array
    public List<byte[]> AdditionalImages { get; set; } = new();
    public string[] TechStack { get; set; }
    public ProjectStatus Status { get; set; }
    public string LiveUrl { get; set; }
    
    public string RepoUrl { get; set; }
    public string Year { get; set; }
    public string Role { get; set; }
    public string KeyFeatures { get; set; }
    
    public string Challenges { get; set; }
    public string Solutions { get; set; }
    public string Impact { get; set; }
    public string[] Learnings { get; set; }
    public DateTime? CreatedAt { get; set; }
    
    
    
}

public enum ProjectStatus
{
    [EnumMember(Value = "Current")]
    Current,
    [EnumMember(Value = "Completed")]
    Completed,
}