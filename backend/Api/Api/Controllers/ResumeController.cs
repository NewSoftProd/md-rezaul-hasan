
using Api.Models;
using Api.Response;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ResumeController : ControllerBase
{
    private readonly IResumeService _resumeService;

    public ResumeController(IResumeService resumeService)
    {
        _resumeService = resumeService;
    }

    [HttpGet("full")]
    public async Task<ActionResult<ResumeResponse>> GetFullResume()
    {
        var resumeData = await _resumeService.GetFullResumeDataAsync();
        return Ok(resumeData);
    }

   
}