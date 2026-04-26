using System.ComponentModel.DataAnnotations;

namespace Api.DTOs;

public class ExperienceDto
{

    [Required(ErrorMessage = "Title is required")]
    [StringLength(200, MinimumLength = 3, 
        ErrorMessage = "Title must be between 3 and 200 characters")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Company is required")]
    [StringLength(150, MinimumLength = 2, 
        ErrorMessage = "Company name must be between 2 and 150 characters")]
    public string Company { get; set; }

    [Required(ErrorMessage = "Start date is required")]
    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    [Required(ErrorMessage = "Description is required")]
    [StringLength(2000, MinimumLength = 10, 
        ErrorMessage = "Description must be between 10 and 2000 characters")]
    public string Description { get; set; }

    [Required(ErrorMessage = "At least one skill is required")]
    [MinLength(1, ErrorMessage = "At least one skill must be provided")]
    public string[] Skills { get; set; }

    // Custom validation method
    public ValidationResult Validate()
    {
        if (EndDate <= StartDate)
        {
            return new ValidationResult("End date must be after start date");
        }
        return ValidationResult.Success;
    }
}

