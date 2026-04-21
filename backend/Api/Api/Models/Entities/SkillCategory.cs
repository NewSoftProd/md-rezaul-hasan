namespace Api.Models;

public class SkillCategory
{
    public int Id { get; set; }
    public string Category { get; set; }
    public string[] Skills { get; set; }
    public DateTime CreatedAt { get; set; }
}