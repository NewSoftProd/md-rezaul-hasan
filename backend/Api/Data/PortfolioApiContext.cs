using Microsoft.EntityFrameworkCore;
using Api.Models;

namespace Api.Data
{
    public class PortfolioApiContext : DbContext
    {
        public PortfolioApiContext(DbContextOptions<PortfolioApiContext> options)
            : base(options)
        {
        }

        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Project> Projects { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure BlogPost entity
            modelBuilder.Entity<BlogPost>()
                .HasKey(b => b.Id);

            modelBuilder.Entity<BlogPost>()
                .Property(b => b.Title)
                .IsRequired()
                .HasMaxLength(200);

            modelBuilder.Entity<BlogPost>()
                .Property(b => b.Content)
                .IsRequired();

            // Configure Project entity
            modelBuilder.Entity<Project>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Project>()
                .Property(p => p.Title)
                .IsRequired()
                .HasMaxLength(200);

            modelBuilder.Entity<Project>()
                .Property(p => p.Description)
                .IsRequired();
        }
    }
}
