using System;
using System.Runtime.Serialization;

namespace backend.Models;

public class Learning
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public LearningStatus Status { get; set; } = LearningStatus.Starting;
    
    // Foreign key
    public Guid UserId { get; set; }
    
    // Navigation property
    public User? User { get; set; }
}

public enum LearningStatus
{
    [EnumMember(Value = "In Progress")]
    InProgress,
    [EnumMember(Value = "Completed")]
    Completed,
    [EnumMember(Value = "Starting")]
    Starting
}

