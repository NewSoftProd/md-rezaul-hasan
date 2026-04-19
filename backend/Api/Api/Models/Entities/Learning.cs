namespace Api.Models;

public class Learning
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public LearningStatus Status { get; set; }
    public DateTime CreatedAt { get; set; }
    
}

public enum LearningStatus
{
    InProgress,
    Completed,
    Starting
}