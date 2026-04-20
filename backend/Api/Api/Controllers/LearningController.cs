using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class Learning:ControllerBase
{
    
    [HttpPost]
    public IActionResult AddLearning([FromBody] LearningDto learningDto)
    {
        if (!ModelState.IsValid) 
            return BadRequest(ModelState); // Returns 400 if validation fails

        // Logic to save product to database...
        
        return CreatedAtAction(nameof(GetById), new { id = productDto.Id }, productDto);
    }