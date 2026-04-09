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
    title: "Rental Management Platform",
    imageUrl: "/images/projects/sharkarbari/home.png",
    imageGallery: [
      "/images/projects/sharkarbari/home.png",
      "/images/projects/sharkarbari/content_without_footer.png",
      "/images/projects/sharkarbari/footer_with_content.png",
    ],
    description: "A rental property management platform for landlords and tenants with lease tracking, maintenance requests, and automated payments.",
    fullDescription: "A full-featured rental management application that streamlines property operations, tenant communication, rent collection, and maintenance workflows. It supports lease lifecycle management, tenant portals, owner reporting, and automated notifications for a seamless rental experience.",
    techStack: ["Nextjs", "TypeScript", "Node.js", "PostgreSQL"],
    status: "current",
    liveUrl: "#",
    repoUrl: "#",
    year: "2025",
    role: "Full Stack Engineer",
    keyFeatures: [
      "Tenant portal for rent payments and maintenance requests",
      "Lease management with automated renewals and reminders",
      "Property overview dashboard with income and occupancy stats",
      "Document storage for contracts, invoices, and inspection reports",
      "Owner reporting with transaction history and performance summaries",
    ],
    challenges: [
      "Synchronizing lease terms, rent cycles, and payment schedules",
      "Providing secure document access for multiple user roles",
      "Ensuring reliable notifications across email and SMS channels",
    ],
    solutions: [
      "Built a flexible lease scheduler with recurring payment support",
      "Implemented role-based access controls for landlords, tenants, and managers",
      "Integrated notification services for reminders and status updates",
    ],
    impact: "Reduced rent collection delays by 30% and improved maintenance response time by 50%",
    learnings: [
      "Designing tenant-focused workflows for property management",
      "Implementing secure role-based access across portals",
      "Balancing complex scheduling logic with intuitive UX",
    ],
  },
  {
    id: "2",
    title: "E-Commerce Storefront",
   imageUrl: "/images/projects/new_portfolio/projects.png",
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
    title: "Portfolio Website",
    imageUrl: "/images/projects/old_portfolio/home.png",
    imageGallery: [
      "/images/projects/old_portfolio/home.png",
      "/images/projects/old_portfolio/skills.png",
      "/images/projects/old_portfolio/projects.png",
      "/images/projects/old_portfolio/footer.png",
    ],
    description: "This is an old version of my personal portfolio website built with HTML, CSS, and JavaScript, showcasing my old projects, skills, and experience with a focus on responsive design.",
    fullDescription: "A personal portfolio website showcasing projects, education, and professional experience. Built with modern web technologies emphasizing responsive design, performance, and rich animations.",
    techStack: ["JavaScript", "HTML", "CSS"],
    status: "completed",
    liveUrl: "https://mdrezaulhasan3b1s.web.app/",
    repoUrl: "#",
    year: "2021",
    role: "Frontend Developer",
    keyFeatures: [
      "Responsive design for all device sizes",
      "Smooth scroll animations with Framer Motion",
      "Project showcase with interactive elements",
      "Skills section with animated progress bars",
    ],
    challenges: [
      "Creating engaging animations without performance issues",
      "Ensuring cross-browser compatibility",
      "Optimizing load times for media-rich content",
    ],
    solutions: [
      "Showcasing projects with optimized images and lazy loading",
      "Implemented responsive design with CSS Grid and Flexbox",
    ],
    impact: "Increased portfolio engagement and professional opportunities",
    learnings: [
      "Responsive web design techniques",
      "Performance optimization for animations",
      "Design system principles",
    ],
  },
  {
    id: "4",
    title: "Personal Blog Platform",
  imageUrl: "/images/projects/new_portfolio/home.png",
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
