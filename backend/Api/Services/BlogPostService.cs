using Api.Models;
using Api.Repositories;

namespace Api.Services
{
    public interface IBlogPostService
    {
        Task<IEnumerable<BlogPost>> GetAllBlogPostsAsync();
        Task<BlogPost?> GetBlogPostByIdAsync(int id);
        Task CreateBlogPostAsync(BlogPost blogPost);
        Task UpdateBlogPostAsync(BlogPost blogPost);
        Task DeleteBlogPostAsync(int id);
    }

    public class BlogPostService : IBlogPostService
    {
        private readonly IBlogPostRepository _repository;

        public BlogPostService(IBlogPostRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<BlogPost>> GetAllBlogPostsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<BlogPost?> GetBlogPostByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task CreateBlogPostAsync(BlogPost blogPost)
        {
            blogPost.CreatedAt = DateTime.UtcNow;
            blogPost.UpdatedAt = DateTime.UtcNow;
            await _repository.AddAsync(blogPost);
        }

        public async Task UpdateBlogPostAsync(BlogPost blogPost)
        {
            blogPost.UpdatedAt = DateTime.UtcNow;
            await _repository.UpdateAsync(blogPost);
        }

        public async Task DeleteBlogPostAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
