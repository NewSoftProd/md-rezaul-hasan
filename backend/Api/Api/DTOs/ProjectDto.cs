using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Api.Models;

public class ProjectDto
{
    [Required(ErrorMessage = "Title is required.")]
    [StringLength(150, MinimumLength = 3, ErrorMessage = "Title must be between 3 and 150 characters.")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Short description is required.")]
    [StringLength(500, ErrorMessage = "Description cannot exceed 500 characters.")]
    public string Description { get; set; }

    [Required(ErrorMessage = "Full description is required.")]
    public string FullDescription { get; set; }
    
    [MaxFileSize(5 * 1024 * 1024)] 
    [AllowedExtensions(new[] { ".jpg", ".jpeg", ".png", ".webp" })]
    public IFormFile? MainImage { get; set; }

    [MaxFileSize(5 * 1024 * 1024)]
    [AllowedExtensions(new[] { ".jpg", ".jpeg", ".png" })]
    [MaxLength(10, ErrorMessage = "You can upload a maximum of 10 additional images.")]
    public List<IFormFile> AdditionalImages { get; set; } = new();


    
    [Required(ErrorMessage = "Tech stack is required.")]
    [MinLength(1, ErrorMessage = "At least one technology must be specified in the Tech Stack.")]
    public string[] TechStack { get; set; }

    [Required(ErrorMessage = "Project status is required.")]
    // If ProjectStatus is an enum, ASP.NET will automatically validate that the provided integer/string maps to a valid enum value.
    public ProjectStatus Status { get; set; }

    [Url(ErrorMessage = "Live URL must be a valid web address.")]
    public string? LiveUrl { get; set; } // Made nullable since a project might not be live
    
    [Url(ErrorMessage = "Repository URL must be a valid web address.")]
    public string? RepoUrl { get; set; } // Made nullable since a repo might be private/non-existent

    [Required(ErrorMessage = "Year is required.")]
    [RegularExpression(@"^(19|20)\d{2}$", ErrorMessage = "Year must be a valid 4-digit year (e.g., 2024).")]
    public string Year { get; set; }

    [Required(ErrorMessage = "Role is required.")]
    [StringLength(100, ErrorMessage = "Role cannot exceed 100 characters.")]
    public string Role { get; set; }

    [StringLength(2000, ErrorMessage = "Key features text is too long.")]
    public string? KeyFeatures { get; set; }
    
    [StringLength(2000, ErrorMessage = "Challenges text is too long.")]
    public string? Challenges { get; set; }

    [StringLength(2000, ErrorMessage = "Solutions text is too long.")]
    public string? Solutions { get; set; }

    [StringLength(1000, ErrorMessage = "Impact text is too long.")]
    public string? Impact { get; set; }

    public string[]? Learnings { get; set; }
    
}



public class MaxFileSizeAttribute : ValidationAttribute
{
    private readonly int _maxFileSize;
    public MaxFileSizeAttribute(int maxFileSize) => _maxFileSize = maxFileSize;

    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        // Handle Single File
        if (value is IFormFile file)
        {
            if (file.Length > _maxFileSize)
                return new ValidationResult($"File '{file.FileName}' exceeds the 5MB limit.");
        }
        
        // Handle List of Files
        if (value is IEnumerable<IFormFile> files)
        {
            foreach (var f in files)
            {
                if (f.Length > _maxFileSize)
                    return new ValidationResult($"File '{f.FileName}' exceeds the 5MB limit.");
            }
        }

        return ValidationResult.Success;
    }
}

public class AllowedExtensionsAttribute : ValidationAttribute
{
    private readonly string[] _extensions;
    public AllowedExtensionsAttribute(string[] extensions) => _extensions = extensions;

    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        var files = value switch
        {
            IFormFile file => new[] { file },
            IEnumerable<IFormFile> fileList => fileList,
            _ => Enumerable.Empty<IFormFile>()
        };

        foreach (var file in files)
        {
            var extension = Path.GetExtension(file.FileName).ToLower();
            if (!_extensions.Contains(extension))
                return new ValidationResult($"File extension {extension} is not allowed.");
        }

        return ValidationResult.Success;
    }
}