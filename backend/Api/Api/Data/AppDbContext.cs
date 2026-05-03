using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class AppDbContext : DbContext
{
    // Constructor passing options to the base DbContext class
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // Define database tables (Entities)
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Education> Educations { get; set; }
    public DbSet<Experience> Experiences { get; set; }
    public DbSet<Learning> Learnings { get; set; }
    public DbSet<Project> Projects { get; set; }
    public DbSet<SkillCategory> SkillCategories { get; set; }
    
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // This conversion need for storing enum to string 
        modelBuilder.Entity<Learning>()
            .Property(l => l.Status)
            .HasConversion<string>()
            .HasMaxLength(20);
        modelBuilder.Entity<Project>()
            .Property(p => p.Status)
            .HasConversion<string>()
            .HasMaxLength(20);
        
        // Ensure EF Core knows to map this as an array type in PostgreSQL
        modelBuilder.Entity<Project>()
            .Property(e => e.AdditionalImages)
            .HasColumnType("bytea[]");
    }
}