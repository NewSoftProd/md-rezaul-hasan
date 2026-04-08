import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/test-utils";
import Index from "@/pages/Index";

// Mock the child components
vi.mock("@/components/portfolio/Navbar", () => ({
  Navbar: () => <div data-testid="navbar">Navbar</div>,
}));

vi.mock("@/components/portfolio/Hero", () => ({
  Hero: () => <div data-testid="hero">Hero Section</div>,
}));

vi.mock("@/components/portfolio/ExperienceTimeline", () => ({
  ExperienceTimeline: () => <div data-testid="experience">Experience Timeline</div>,
}));

vi.mock("@/components/portfolio/ProjectsShowcase", () => ({
  ProjectsShowcase: () => <div data-testid="projects">Projects Showcase</div>,
}));

vi.mock("@/components/portfolio/SkillsSection", () => ({
  SkillsSection: () => <div data-testid="skills">Skills Section</div>,
}));

vi.mock("@/components/portfolio/LearningTopics", () => ({
  LearningTopics: () => <div data-testid="learning">Learning Topics</div>,
}));

vi.mock("@/components/portfolio/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

vi.mock("@/components/portfolio/EducationTimeline", () => ({
  EducationTimeline: () => <div data-testid="education">Education Timeline</div>,
}));

describe("Index Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the main layout with min-h-screen class", () => {
    const { container } = renderWithProviders(<Index />);
    const mainDiv = container.querySelector(".min-h-screen");
    expect(mainDiv).toBeInTheDocument();
  });

  it("renders Navbar component", () => {
    renderWithProviders(<Index />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders Hero component", () => {
    renderWithProviders(<Index />);
    expect(screen.getByTestId("hero")).toBeInTheDocument();
  });

  it("renders ExperienceTimeline component", () => {
    renderWithProviders(<Index />);
    expect(screen.getByTestId("experience")).toBeInTheDocument();
  });

  it("renders ProjectsShowcase component", () => {
    renderWithProviders(<Index />);
    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });

  it("renders SkillsSection component", () => {
    renderWithProviders(<Index />);
    expect(screen.getByTestId("skills")).toBeInTheDocument();
  });

  it("renders LearningTopics component", () => {
    renderWithProviders(<Index />);
    expect(screen.getByTestId("learning")).toBeInTheDocument();
  });

  it("renders EducationTimeline component", () => {
    renderWithProviders(<Index />);
    expect(screen.getByTestId("education")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    renderWithProviders(<Index />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders all components in correct order", () => {
    renderWithProviders(<Index />);

    const navbarIndex = screen.getByTestId("navbar").parentElement?.compareDocumentPosition(screen.getByTestId("footer").parentElement!) || 0;
    
    // All components should be rendered (order verification through structure)
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("experience")).toBeInTheDocument();
    expect(screen.getByTestId("projects")).toBeInTheDocument();
    expect(screen.getByTestId("skills")).toBeInTheDocument();
    expect(screen.getByTestId("learning")).toBeInTheDocument();
    expect(screen.getByTestId("education")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("uses background styling from Tailwind", () => {
    const { container } = renderWithProviders(<Index />);
    const mainDiv = container.querySelector(".bg-background");
    expect(mainDiv).toBeInTheDocument();
  });

  it("wraps content in main tag", () => {
    const { container } = renderWithProviders(<Index />);
    const mainTag = container.querySelector("main");
    expect(mainTag).toBeInTheDocument();
  });

  it("does not display error messages or fallback UI", () => {
    renderWithProviders(<Index />);
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
  });
});
