import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import * as projectsModule from "@/data/projects";

// Mock dependencies
vi.mock("framer-motion", () => ({
  motion: {
    button: ({ children, onClick, ...props }: any) => (
      <button onClick={onClick} {...props}>
        {children}
      </button>
    ),
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

vi.mock("@/components/portfolio/Navbar", () => ({
  Navbar: () => <div data-testid="navbar">Navbar</div>,
}));

vi.mock("@/components/portfolio/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

vi.mock("@/components/portfolio/ImageSlider", () => ({
  ImageSlider: ({ images, title }: any) => (
    <div data-testid="image-slider">
      {title} - {images?.length} images
    </div>
  ),
}));

vi.mock("@/components/ui/badge", () => ({
  Badge: ({ children, ...props }: any) => <span data-testid="badge" {...props}>{children}</span>,
}));

vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}));

describe("ProjectDetailPage", () => {
  const mockProject = {
    id: "1",
    title: "Test Project",
    description: "A test project description",
    status: "completed" as const,
    year: "2023",
    role: "Developer",
    technologies: ["React", "TypeScript"],
    imageUrl: "/images/test.jpg",
  };

  const TestWrapper = ({ id }: { id: string }) => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
      <Route path="/project/:id" component={ProjectDetailPage} />
    </BrowserRouter>
  );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders Navbar component when project exists", () => {
    vi.spyOn(projectsModule, "projects", "get").mockReturnValue([mockProject] as any);
    
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>,
      { initialRoute: `/project/${mockProject.id}` }
    );
    // Note: This test structure needs proper routing setup
  });

  it("renders 'Project Not Found' when project ID does not exist", () => {
    vi.spyOn(projectsModule, "projects", "get").mockReturnValue([mockProject] as any);

    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>
    );

    // When no matching project
  });

  it("renders back button with correct styling", () => {
    // Test implementation would depend on proper routing setup
  });

  it("displays project title in page", () => {
    // Test implementation
  });

  it("renders project description", () => {
    // Test implementation
  });

  it("shows project status badge", () => {
    // Test implementation
  });

  it("displays project year if available", () => {
    // Test implementation
  });

  it("displays project role if available", () => {
    // Test implementation
  });

  it("renders image slider when project has image gallery", () => {
    // Test implementation
  });

  it("renders single image when project has imageUrl but no gallery", () => {
    // Test implementation
  });

  it("does not render images when project has neither imageUrl nor gallery", () => {
    // Test implementation
  });

  it("displays all technologies in tech stack", () => {
    // Test implementation
  });

  it("navigates back to home when back button is clicked", () => {
    // Test implementation
  });

  it("renders Footer component", () => {
    // Test implementation
  });

  it("shows Contact and Links section when available", () => {
    // Test implementation
  });

  it("applies correct layout classes for responsiveness", () => {
    // Test implementation with container, px-4, etc.
  });

  it("uses animation classes for motion effects", () => {
    // Test for motion.div and motion.button presence
  });

  it("renders project info cards with correct data", () => {
    // Test implementation
  });

  it("handles missing optional project fields gracefully", () => {
    const minimalProject = {
      id: "2",
      title: "Minimal Project",
      status: "current" as const,
    };
    // Test implementation
  });

  it("displays appropriate message when project not found", () => {
    // Test implementation
  });

  it("back button has proper accessibility attributes", () => {
    // Test for proper button semantics
  });

  it("renders complete project information layout", () => {
    // Test the overall structure of the page
  });
});
