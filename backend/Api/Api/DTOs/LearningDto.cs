using System.ComponentModel.DataAnnotations;
using Api.Models;

namespace Api.DTOs;

public class LearningDto
{

        [Required(ErrorMessage = "Name is required")]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "Name must be between 3 and 100 characters")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Description is required")]
        [StringLength(500, MinimumLength = 10, ErrorMessage = "Description must be between 10 and 500 characters")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public LearningStatus Status { get; set; }

}