using System;

namespace backend.DTOs;

public class SkillDTO
{
public Guid Id { get; set; }
public string Category { get; set; }    = string.Empty;
public string Skills { get; set; }        = string.Empty;
}
