using System;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // DbSets
    public DbSet<User> Users { get; set; }
    public DbSet<Education> Educations { get; set; }
    public DbSet<Experience> Experiences { get; set; }
    public DbSet<Learning> Learnings { get; set; }
    public DbSet<Navgation> Navigations { get; set; }
    public DbSet<Project> Projects { get; set; }
    public DbSet<Skill> Skills { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Skill-Education relationship
        modelBuilder.Entity<Skill>()
            .HasOne(s => s.Education)
            .WithMany(e => e.Skills)
            .HasForeignKey(s => s.EducationId)
            .OnDelete(DeleteBehavior.Cascade);

        // Configure Skill-Experience relationship
        modelBuilder.Entity<Skill>()
            .HasOne(s => s.Experience)
            .WithMany(e => e.Skills)
            .HasForeignKey(s => s.ExperienceId)
            .OnDelete(DeleteBehavior.Cascade);

        // Configure Learning-User relationship
        modelBuilder.Entity<Learning>()
            .HasOne(l => l.User)
            .WithMany(u => u.Learnings)
            .HasForeignKey(l => l.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        // Configure Project-User relationship
        modelBuilder.Entity<Project>()
            .HasOne(p => p.User)
            .WithMany(u => u.Projects)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        // Seed data
        SeedData(modelBuilder);
    }

    private void SeedData(ModelBuilder modelBuilder)
    {
        // Seed User
        var userId = Guid.Parse("11111111-1111-1111-1111-111111111111");
        modelBuilder.Entity<User>().HasData(
            new User
            {
                Id = userId,
                Name = "Md Rezaul Hasan",
                Email = "rezaul@example.com"
            }
        );

        // Seed Education
        var education1Id = Guid.Parse("22222222-2222-2222-2222-111111111111");
        var education2Id = Guid.Parse("22222222-2222-2222-2222-111111111112");

        modelBuilder.Entity<Education>().HasData(
            new Education
            {
                Id = education1Id,
                Title = "Master's degree in Software engineering of distributed systems",
                Company = "KTH Royal Institute of Technology",
                StartDate = "March 2025",
                EndDate = "Pause",
                Description = "Software engineer specializing in distributed systems architecture with a focus on blockchain technologies. Experienced in building fault-tolerant, scalable systems that handle consensus mechanisms, peer-to-peer networking, and decentralized data management. Skilled in developing smart contracts, implementing cryptographic protocols, and designing distributed applications that maintain consistency and availability across network partitions."
            },
            new Education
            {
                Id = education2Id,
                Title = "Bachelor's degree in Computer Science and Engineering",
                Company = "International Islamic University Chittagong",
                StartDate = "January 2012",
                EndDate = "January 2017",
                Description = "Bachelor's degree in Computer Science and Engineering with strong foundations in algorithms, data structures, and computational theory. Coursework covered programming paradigms, discrete mathematics, database systems, operating systems, and computer architecture. Specialized in system design principles, parallel programming techniques, and algorithmic problem-solving. Developed expertise in analyzing time and space complexity, designing scalable solutions, and implementing efficient code across multiple programming languages."
            }
        );

        // Seed Experience
        var exp1Id = Guid.Parse("33333333-3333-3333-3333-111111111111");
        var exp2Id = Guid.Parse("33333333-3333-3333-3333-111111111112");
        var exp3Id = Guid.Parse("33333333-3333-3333-3333-111111111113");

        modelBuilder.Entity<Experience>().HasData(
            new Experience
            {
                Id = exp1Id,
                Title = "Tech Lead | Backend & DevOps Infrastructure Engineer",
                Company = "SEB Bank",
                StartDate = "March 2025",
                EndDate = "Present",
                Description = "As a Tech Lead, I empower our team by building a scalable DevOps infrastructure with a strong CI/CD focus. I drive automation, streamline deployments, and contribute to API development in .NET, along with MFE UIs in Next.js/Angular when needed. My goal is to enhance software delivery, reliability, and innovation through collaboration and technical excellence."
            },
            new Experience
            {
                Id = exp2Id,
                Title = "Full Stack Developer",
                Company = "SEB Bank",
                StartDate = "November 2023",
                EndDate = "March 2025",
                Description = "Building KYC applications for risk review means creating systems that verify customer identities, screen against sanctions and PEP lists, and flag potential risks—all while keeping the process smooth for legitimate users. The key is balancing strong compliance controls with intuitive workflows that help risk analysts make fast, informed decisions. Good KYC apps automate routine checks, surface high-risk cases for human review, and maintain clear audit trails for regulators."
            },
            new Experience
            {
                Id = exp3Id,
                Title = "Software Engineer | DevOps | Mainframe Modernization",
                Company = "SEB Bank",
                StartDate = "September 2021",
                EndDate = "November 2023",
                Description = "Software engineer specializing in DevOps practices and mainframe modernization initiatives. Focused on bridging legacy systems with modern cloud infrastructure, implementing CI/CD pipelines, and transforming traditional mainframe environments into agile, scalable platforms. Experienced in containerization, automation, and migrating critical business applications from COBOL and JCL to contemporary tech stacks while maintaining system reliability and performance."
            }
        );

        // Seed Skills for Education
        var eduSkill1Id = Guid.Parse("44444444-4444-4444-4444-111111111111");
        var eduSkill2Id = Guid.Parse("44444444-4444-4444-4444-111111111112");
        var eduSkill3Id = Guid.Parse("44444444-4444-4444-4444-111111111113");
        var eduSkill4Id = Guid.Parse("44444444-4444-4444-4444-111111111114");
        var eduSkill5Id = Guid.Parse("44444444-4444-4444-4444-111111111115");
        var eduSkill6Id = Guid.Parse("44444444-4444-4444-4444-111111111116");
        var eduSkill7Id = Guid.Parse("44444444-4444-4444-4444-111111111117");
        var eduSkill8Id = Guid.Parse("44444444-4444-4444-4444-111111111118");

        modelBuilder.Entity<Skill>().HasData(
            // Education 1 Skills
            new Skill { Id = eduSkill1Id, Name = "Docker", Category = "Tools", EducationId = education1Id },
            new Skill { Id = eduSkill2Id, Name = "Thread modeling", Category = "Concepts", EducationId = education1Id },
            new Skill { Id = eduSkill3Id, Name = "Concurrency", Category = "Concepts", EducationId = education1Id },
            new Skill { Id = eduSkill4Id, Name = "Tendermint Network", Category = "Blockchain", EducationId = education1Id },
            // Education 2 Skills
            new Skill { Id = eduSkill5Id, Name = "Distributed database", Category = "Databases", EducationId = education2Id },
            new Skill { Id = eduSkill6Id, Name = "C programming language", Category = "Languages", EducationId = education2Id },
            new Skill { Id = eduSkill7Id, Name = "Algorithms", Category = "Concepts", EducationId = education2Id },
            new Skill { Id = eduSkill8Id, Name = "Data structures", Category = "Concepts", EducationId = education2Id }
        );

        // Seed Skills for Experience
        var expSkill1Id = Guid.Parse("55555555-5555-5555-5555-111111111111");
        var expSkill2Id = Guid.Parse("55555555-5555-5555-5555-111111111112");
        var expSkill3Id = Guid.Parse("55555555-5555-5555-5555-111111111113");
        var expSkill4Id = Guid.Parse("55555555-5555-5555-5555-111111111114");
        var expSkill5Id = Guid.Parse("55555555-5555-5555-5555-111111111115");
        var expSkill6Id = Guid.Parse("55555555-5555-5555-5555-111111111116");
        var expSkill7Id = Guid.Parse("55555555-5555-5555-5555-111111111117");
        var expSkill8Id = Guid.Parse("55555555-5555-5555-5555-111111111118");
        var expSkill9Id = Guid.Parse("55555555-5555-5555-5555-111111111119");

        modelBuilder.Entity<Skill>().HasData(
            // Experience 1 Skills
            new Skill { Id = expSkill1Id, Name = "ASP.NET Web API", Category = "Frameworks", ExperienceId = exp1Id },
            new Skill { Id = expSkill2Id, Name = "React", Category = "Frameworks", ExperienceId = exp1Id },
            new Skill { Id = expSkill3Id, Name = "Github Actions", Category = "Tools", ExperienceId = exp1Id },
            // Experience 2 Skills
            new Skill { Id = expSkill4Id, Name = "ASP.NET Core MVC", Category = "Frameworks", ExperienceId = exp2Id },
            new Skill { Id = expSkill5Id, Name = "Angular", Category = "Frameworks", ExperienceId = exp2Id },
            new Skill { Id = expSkill6Id, Name = "Docker Swarm", Category = "Tools", ExperienceId = exp2Id },
            // Experience 3 Skills
            new Skill { Id = expSkill7Id, Name = "Jenkins", Category = "Tools", ExperienceId = exp3Id },
            new Skill { Id = expSkill8Id, Name = "GCP", Category = "Cloud", ExperienceId = exp3Id },
            new Skill { Id = expSkill9Id, Name = "MSSQL", Category = "Databases", ExperienceId = exp3Id }
        );

        // Seed Navigation
        var nav1Id = Guid.Parse("66666666-6666-6666-6666-111111111111");
        var nav2Id = Guid.Parse("66666666-6666-6666-6666-111111111112");
        var nav3Id = Guid.Parse("66666666-6666-6666-6666-111111111113");
        var nav4Id = Guid.Parse("66666666-6666-6666-6666-111111111114");
        var nav5Id = Guid.Parse("66666666-6666-6666-6666-111111111115");
        var nav6Id = Guid.Parse("66666666-6666-6666-6666-111111111116");

        modelBuilder.Entity<Navgation>().HasData(
            new Navgation { Id = nav1Id, Label = "Experience", Href = "#experience" },
            new Navgation { Id = nav2Id, Label = "Projects", Href = "#projects" },
            new Navgation { Id = nav3Id, Label = "Skills", Href = "#skills" },
            new Navgation { Id = nav4Id, Label = "Learning", Href = "#learning" },
            new Navgation { Id = nav5Id, Label = "Education", Href = "#education" },
            new Navgation { Id = nav6Id, Label = "Resume", Href = "/resume" }
        );

        // Seed Learning
        var learning1Id = Guid.Parse("77777777-7777-7777-7777-111111111111");
        var learning2Id = Guid.Parse("77777777-7777-7777-7777-111111111112");
        var learning3Id = Guid.Parse("77777777-7777-7777-7777-111111111113");
        var learning4Id = Guid.Parse("77777777-7777-7777-7777-111111111114");

        modelBuilder.Entity<Learning>().HasData(
            new Learning
            {
                Id = learning1Id,
                Name = "GO Programming language",
                Description = "Exploring GO language for high-performance cloud native applications and cross-platform tooling.",
                Status = LearningStatus.InProgress,
                UserId = userId
            },
            new Learning
            {
                Id = learning2Id,
                Name = "System Design",
                Description = "Deep-diving into distributed systems, message queues, and scalability patterns.",
                Status = LearningStatus.InProgress,
                UserId = userId
            },
            new Learning
            {
                Id = learning3Id,
                Name = "AI / ML Fundamentals",
                Description = "Learning the foundations of machine learning with practical applications in software products.",
                Status = LearningStatus.Starting,
                UserId = userId
            },
            new Learning
            {
                Id = learning4Id,
                Name = "Trading/ Investment Strategies",
                Description = "Learning the foundations of trading and investment strategies to build financial applications and planning to have day trading skills as part time.",
                Status = LearningStatus.Starting,
                UserId = userId
            }
        );

        // Seed Projects
        var project1Id = Guid.Parse("88888888-8888-8888-8888-111111111111");
        var project2Id = Guid.Parse("88888888-8888-8888-8888-111111111112");
        var project3Id = Guid.Parse("88888888-8888-8888-8888-111111111113");
        var project4Id = Guid.Parse("88888888-8888-8888-8888-111111111114");

        modelBuilder.Entity<Project>().HasData(
            new Project
            {
                Id = project1Id,
                Title = "SaaS Analytics Platform",
                Description = "A real-time analytics dashboard for tracking user engagement, conversion funnels, and revenue metrics.",
                FullDescription = "A comprehensive analytics platform designed for SaaS companies to track and optimize user behavior, conversion rates, and revenue metrics in real-time. The platform provides intuitive visualizations, custom dashboards, and actionable insights to drive business growth.",
                ImageUrl = "/images/projects/saas-analytics.png",
                TechStack = new[] { "React", "TypeScript", "Node.js", "PostgreSQL" },
                Status = ProjectStatus.Current,
                LiveUrl = "#",
                RepoUrl = "#",
                Year = "2025",
                Role = "Full Stack Engineer",
                KeyFeatures = new[] { "Real-time data visualization", "Customizable dashboard", "Advanced filtering", "Automated reports", "Team collaboration" },
                Challenges = new[] { "Handling large-scale data", "Query optimization", "Data consistency" },
                Solutions = new[] { "WebSocket connections", "Query caching", "Event-driven architecture" },
                Impact = "Reduced churn by 25% and increased adoption by 40%",
                Learnings = new[] { "React patterns", "Real-time handling", "Scalable database design" },
                UserId = userId
            },
            new Project
            {
                Id = project2Id,
                Title = "E-Commerce Storefront",
                Description = "Headless commerce solution with server-side rendering, cart management, and Stripe integration.",
                FullDescription = "A modern e-commerce platform built with a headless architecture, enabling seamless shopping experiences across web and mobile. Features server-side rendering for superior performance, integrated payment processing, and real-time inventory management.",
                ImageUrl = "/images/projects/saas-analytics.png",
                TechStack = new[] { "Next.js", "Tailwind", "Stripe", "Supabase" },
                Status = ProjectStatus.Current,
                RepoUrl = "#",
                Year = "2024",
                Role = "Frontend & Backend Engineer",
                KeyFeatures = new[] { "Server-side rendering", "Stripe integration", "Inventory management", "ML recommendations", "Mobile responsive" },
                Challenges = new[] { "Performance optimization", "Payment workflows", "User authentication" },
                Solutions = new[] { "ISR implementation", "Webhook handlers", "JWT with refresh tokens" },
                Impact = "Increased conversion by 35% and reduced abandonment by 20%",
                Learnings = new[] { "Next.js features", "Payment integration", "E-commerce optimization" },
                UserId = userId
            },
            new Project
            {
                Id = project3Id,
                Title = "Task Management CLI",
                Description = "A fast, keyboard-driven CLI tool for managing tasks and projects directly from the terminal.",
                FullDescription = "A lightweight command-line interface built in Rust for efficient task and project management. Designed for developers who prefer terminal-based workflows with vim-like keybindings and intuitive commands.",
                ImageUrl = "/images/projects/saas-analytics.png",
                TechStack = new[] { "Rust", "SQLite", "Clap" },
                Status = ProjectStatus.Completed,
                RepoUrl = "#",
                Year = "2023",
                Role = "Full Stack Developer",
                KeyFeatures = new[] { "Vim-like keybindings", "Task management", "Project organization", "Export formats", "Cross-platform" },
                Challenges = new[] { "CLI design", "SQLite optimization", "Cross-platform compatibility" },
                Solutions = new[] { "Clap framework", "Lazy loading", "Platform testing" },
                Impact = "Adopted by 500+ developers",
                Learnings = new[] { "Rust programming", "CLI design", "Database optimization" },
                UserId = userId
            },
            new Project
            {
                Id = project4Id,
                Title = "Portfolio Website",
                Description = "This very site — a dynamic, content-managed portfolio built with modern web technologies.",
                FullDescription = "A personal portfolio website showcasing projects, education, and professional experience. Built with modern web technologies emphasizing responsive design, performance, and rich animations.",
                ImageUrl = "/images/projects/saas-analytics.png",
                TechStack = new[] { "React", "TypeScript", "Supabase", "Tailwind" },
                Status = ProjectStatus.Completed,
                LiveUrl = "#",
                RepoUrl = "#",
                Year = "2024",
                Role = "Full Stack Developer",
                KeyFeatures = new[] { "Responsive design", "Smooth animations", "Content management", "SEO optimized", "Dark mode" },
                Challenges = new[] { "Animation performance", "Responsive design", "Bundle optimization" },
                Solutions = new[] { "Framer Motion", "Mobile-first approach", "Code splitting" },
                Impact = "Portfolio attracting quality leads",
                Learnings = new[] { "Animation libraries", "CMS integration", "Performance tuning" },
                UserId = userId
            }
        );
    }
}
