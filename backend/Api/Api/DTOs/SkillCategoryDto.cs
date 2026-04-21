using System.ComponentModel.DataAnnotations;

namespace Api.DTOs;

public class SkillCategoryDto
{
    [Required(ErrorMessage = "Category is required.")]
    [StringLength(100, MinimumLength = 1, ErrorMessage = "Category must be between 1 and 100 characters.")]
    public string Category { get; set; }

    [Required(ErrorMessage = "Skills are required.")]
    [MinLength(1, ErrorMessage = "At least one skill must be provided.")]
    public string[] Skills { get; set; }
  
}