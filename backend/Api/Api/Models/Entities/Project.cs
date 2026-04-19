namespace Api.Models;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string FullDescription { get; set; }
    public string ImageUrl { get; set; }
    public string[] ImageGallery { get; set; }
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
 Current,
     Completed
}