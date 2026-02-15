export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  imageUrl?: string;
  imageGallery?: string[];
  techStack: string[];
  status: "current" | "completed";
  liveUrl?: string;
  repoUrl?: string;
  year?: string;
  role?: string;
  keyFeatures?: string[];
  challenges?: string[];
  solutions?: string[];
  impact?: string;
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "SaaS Analytics Platform",
    imageUrl: "/images/projects/saas-analytics.png",
    description: "A real-time analytics dashboard for tracking user engagement, conversion funnels, and revenue metrics.",
    fullDescription: "A comprehensive analytics platform designed for SaaS companies to track and optimize user behavior, conversion rates, and revenue metrics in real-time. The platform provides intuitive visualizations, custom dashboards, and actionable insights to drive business growth.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    status: "current",
    liveUrl: "#",
    repoUrl: "#",
    year: "2025",
    role: "Full Stack Engineer",
    keyFeatures: [
      "Real-time data visualization and analytics",
      "Customizable dashboard with drag-and-drop widgets",
      "Advanced filtering and segmentation",
      "Automated report generation and scheduling",
      "Team collaboration with role-based access control",
    ],
    challenges: [
      "Handling large-scale real-time data streams",
      "Optimizing database queries for performance",
      "Ensuring data consistency across distributed systems",
    ],
    solutions: [
      "Implemented WebSocket connections for real-time updates",
      "Used query optimization and caching strategies",
      "Applied event-driven architecture for data resilience",
    ],
    impact: "Reduced customer churn by 25% and increased feature adoption by 40%",
    learnings: [
      "Advanced React patterns and performance optimization",
      "Real-time data handling and WebSocket management",
      "Scalable database design for analytics workloads",
    ],
  },
  {
    id: "2",
    title: "E-Commerce Storefront",
   imageUrl: "/images/projects/saas-analytics.png",
    description: "Headless commerce solution with server-side rendering, cart management, and Stripe integration.",
    fullDescription: "A modern e-commerce platform built with a headless architecture, enabling seamless shopping experiences across web and mobile. Features server-side rendering for superior performance, integrated payment processing, and real-time inventory management.",
    techStack: ["Next.js", "Tailwind", "Stripe", "Supabase"],
    status: "current",
    repoUrl: "#",
    year: "2024",
    role: "Frontend & Backend Engineer",
    keyFeatures: [
      "Server-side rendering for better SEO and performance",
      "Stripe payment integration with multiple payment methods",
      "Real-time inventory management",
      "Product recommendations using ML algorithms",
      "Mobile-responsive design with progressive enhancement",
    ],
    challenges: [
      "Optimizing performance for product-heavy pages",
      "Managing complex payment workflows and error handling",
      "Implementing secure user authentication",
    ],
    solutions: [
      "Implemented incremental static regeneration (ISR)",
      "Built robust payment webhook handlers with idempotency",
      "Used JWT with refresh token rotation for security",
    ],
    impact: "Increased conversion rate by 35% and reduced cart abandonment by 20%",
    learnings: [
      "Next.js advanced features and deployment strategies",
      "Payment gateway integration and security best practices",
      "E-commerce optimization techniques",
    ],
  },
  {
    id: "3",
    title: "Task Management CLI",
    imageUrl: "/images/projects/saas-analytics.png",
    description: "A fast, keyboard-driven CLI tool for managing tasks and projects directly from the terminal.",
    fullDescription: "A lightweight command-line interface built in Rust for efficient task and project management. Designed for developers who prefer terminal-based workflows with vim-like keybindings and intuitive commands.",
    techStack: ["Rust", "SQLite", "Clap"],
    status: "completed",
    repoUrl: "#",
    year: "2023",
    role: "Full Stack Developer",
    keyFeatures: [
      "Vim-like keybindings for efficient navigation",
      "Create, update, and manage tasks with priority levels",
      "Project organization and task filtering",
      "Export to markdown and JSON formats",
      "Cross-platform compatibility (Linux, macOS, Windows)",
    ],
    challenges: [
      "Building an intuitive CLI interface",
      "Performance optimization for SQLite queries",
      "Cross-platform compatibility with different shells",
    ],
    solutions: [
      "Used Clap for flexible command parsing",
      "Implemented lazy loading and caching",
      "Tested across multiple platforms",
    ],
    impact: "Adopted by 500+ developers with positive community feedback",
    learnings: [
      "Rust programming and systems-level thinking",
      "CLI design patterns and user experience",
      "Database optimization techniques",
    ],
  },
  {
    id: "4",
    title: "Portfolio Website",
  imageUrl: "/images/projects/saas-analytics.png",
    description: "This very site — a dynamic, content-managed portfolio built with modern web technologies.",
    fullDescription: "A personal portfolio website showcasing projects, education, and professional experience. Built with modern web technologies emphasizing responsive design, performance, and rich animations.",
    techStack: ["React", "TypeScript", "Supabase", "Tailwind"],
    status: "completed",
    liveUrl: "#",
    repoUrl: "#",
    year: "2024",
    role: "Full Stack Developer",
    keyFeatures: [
      "Responsive design for all device sizes",
      "Smooth scroll animations with Framer Motion",
      "Content management with Supabase",
      "SEO optimized with meta tags",
      "Dark/Light mode support",
    ],
    challenges: [
      "Creating smooth animations without impacting performance",
      "Maintaining responsive design across devices",
      "Optimizing bundle size",
    ],
    solutions: [
      "Used Framer Motion with viewport detection",
      "Implemented mobile-first CSS approach",
      "Applied code splitting and lazy loading",
    ],
    impact: "Increased portfolio engagement and professional opportunities",
    learnings: [
      "Advanced React animation libraries",
      "Web performance optimization",
      "Design system principles",
    ],
  },
  {
    id: "5",
    title: "Personal Blog Platform",
  imageUrl: "/images/projects/saas-analytics.png",
    description: "A lightweight, static blog platform built with Next.js and Markdown support.",
    fullDescription: "A minimalist blogging platform for publishing technical articles and thoughts. Features Markdown support, syntax highlighting, and fast static generation for optimal performance.",
    techStack: ["Next.js", "Markdown", "Tailwind"],
    status: "completed",
    liveUrl: "#",
    repoUrl: "#",
    year: "2023",
    role: "Full Stack Developer",
    keyFeatures: [
      "Markdown-based content management",
      "Syntax highlighting for code blocks",
      "Tag-based post organization",
      "Static site generation for performance",
      "RSS feed support",
    ],
    challenges: [
      "Parsing and rendering Markdown efficiently",
      "Implementing full-text search",
      "Managing large number of posts",
    ],
    solutions: [
      "Used remark and rehype for Markdown processing",
      "Implemented client-side search with elasticlunr",
      "Used pagination and lazy loading",
    ],
    impact: "Published 50+ technical articles with 10K+ monthly readers",
    learnings: [
      "Markdown parsing and rendering",
      "Static site generation best practices",
      "Content optimization for search engines",
    ],
  },
];
