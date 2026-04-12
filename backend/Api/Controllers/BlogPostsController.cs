using Microsoft.AspNetCore.Mvc;
using Api.Models;
using Api.Services;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogPostsController : ControllerBase
    {
        private readonly IBlogPostService _service;
        private readonly ILogger<BlogPostsController> _logger;

        public BlogPostsController(IBlogPostService service, ILogger<BlogPostsController> logger)
        {
            _service = service;
            _logger = logger;
        }

        /// <summary>
        /// Get all blog posts
        /// </summary>
        /// <returns>List of all blog posts</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPost>>> GetAllBlogPosts()
        {
            try
            {
                var blogPosts = await _service.GetAllBlogPostsAsync();
                return Ok(blogPosts);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving blog posts");
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Get blog post by ID
        /// </summary>
        /// <param name="id">The blog post ID</param>
        /// <returns>The blog post with specified ID</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPost>> GetBlogPostById(int id)
        {
            try
            {
                var blogPost = await _service.GetBlogPostByIdAsync(id);
                if (blogPost == null)
                    return NotFound();

                return Ok(blogPost);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving blog post with ID {Id}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Create a new blog post
        /// </summary>
        /// <param name="blogPost">The blog post to create</param>
        /// <returns>The created blog post</returns>
        [HttpPost]
        public async Task<ActionResult<BlogPost>> CreateBlogPost(BlogPost blogPost)
        {
            try
            {
                await _service.CreateBlogPostAsync(blogPost);
                return CreatedAtAction(nameof(GetBlogPostById), new { id = blogPost.Id }, blogPost);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating blog post");
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Update a blog post
        /// </summary>
        /// <param name="id">The blog post ID</param>
        /// <param name="blogPost">The updated blog post data</param>
        /// <returns>No content on success</returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBlogPost(int id, BlogPost blogPost)
        {
            try
            {
                if (id != blogPost.Id)
                    return BadRequest();

                await _service.UpdateBlogPostAsync(blogPost);
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating blog post with ID {Id}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Delete a blog post
        /// </summary>
        /// <param name="id">The blog post ID</param>
        /// <returns>No content on success</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost(int id)
        {
            try
            {
                await _service.DeleteBlogPostAsync(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting blog post with ID {Id}", id);
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
