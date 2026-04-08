import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/test-utils";
import ResumePage from "@/pages/ResumePage";
import * as resumeModule from "@/data/resume";

// Mock dependencies
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

vi.mock("@/components/portfolio/Navbar", () => ({
  Navbar: () => <div data-testid="navbar">Navbar</div>,
}));

vi.mock("@/components/portfolio/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} data-testid="download-btn" {...props}>
      {children}
    </button>
  ),
}));

vi.mock("@/components/ui/badge", () => ({
  Badge: ({ children, ...props }: any) => <span data-testid="badge" {...props}>{children}</span>,
}));

describe("ResumePage", () => {
  const mockResumeData = {
    name: "John Doe",
    title: "Full Stack Developer",
    contact: {
      email: "john@example.com",
      location: "San Francisco, CA",
      website: "johndoe.com",
    },
    summary: "Experienced developer with passion for building web applications.",
    experience: [
      {
        title: "Senior Developer",
        company: "Tech Corp",
        period: "2022 - Present",
        highlights: [
          "Led team of 5 developers",
          "Improved performance by 40%",
        ],
      },
    ],
    education: [
      {
        degree: "BS in Computer Science",
        school: "University of Tech",
        startYear: 2018,
        endYear: 2022,
      },
    ],
    projects: [
      {
        title: "Project Alpha",
        status: "completed" as const,
        imageUrl: "/images/project.jpg",
        year: "2023",
        description: "An ambitious project that improved user experience",
        techStack: ["React", "TypeScript", "Tailwind"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/example",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(resumeModule, "resumeData", "get").mockReturnValue(mockResumeData as any);
  });

  it("renders the page with correct background", () => {
    const { container } = renderWithProviders(<ResumePage />);
    const mainDiv = container.querySelector(".min-h-screen.bg-background");
    expect(mainDiv).toBeInTheDocument();
  });

  it("renders Navbar component", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("displays Download PDF button", () => {
    renderWithProviders(<ResumePage />);
    const downloadBtn = screen.getByTestId("download-btn");
    expect(downloadBtn).toBeInTheDocument();
    expect(downloadBtn).toHaveTextContent(/Download PDF/i);
  });

  it("hides navbar and download button in print view", () => {
    const { container } = renderWithProviders(<ResumePage />);
    const printHiddenDiv = container.querySelector(".print\\:hidden");
    expect(printHiddenDiv).toBeInTheDocument();
  });

  it("displays resume owner's name as page header", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("displays job title", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
  });

  it("displays contact email", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText(/john@example.com/)).toBeInTheDocument();
  });

  it("displays contact location", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText(/San Francisco, CA/)).toBeInTheDocument();
  });

  it("displays contact website", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText(/johndoe.com/)).toBeInTheDocument();
  });

  it("displays professional summary section", () => {
    renderWithProviders(<ResumePage />);
    const summarySection = screen.getByText(/Summary/);
    expect(summarySection).toBeInTheDocument();
    expect(screen.getByText("Experienced developer with passion for building web applications.")).toBeInTheDocument();
  });

  it("displays Experiences section with all entries", () => {
    renderWithProviders(<ResumePage />);
    const experienceSection = screen.getByText(/Experiences/);
    expect(experienceSection).toBeInTheDocument();
    expect(screen.getByText("Senior Developer")).toBeInTheDocument();
    expect(screen.getByText("Tech Corp")).toBeInTheDocument();
    expect(screen.getByText("2022 - Present")).toBeInTheDocument();
  });

  it("displays experience highlights as bullet points", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText("Led team of 5 developers")).toBeInTheDocument();
    expect(screen.getByText("Improved performance by 40%")).toBeInTheDocument();
  });

  it("displays Education section", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText(/Education/)).toBeInTheDocument();
    expect(screen.getByText("BS in Computer Science")).toBeInTheDocument();
    expect(screen.getByText("University of Tech")).toBeInTheDocument();
  });

  it("displays education start and end years", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText(/2018 — 2022/)).toBeInTheDocument();
  });

  it("displays Projects section", () => {
    renderWithProviders(<ResumePage />);
    expect(screen.getByText(/Projects/)).toBeInTheDocument();
    expect(screen.getByText("Project Alpha")).toBeInTheDocument();
  });

  it("displays project images if available", () => {
    renderWithProviders(<ResumePage />);
    const projectImage = screen.getByAltText("Project Alpha");
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute("src", "/images/project.jpg");
  });

  it("displays project status badge", () => {
    renderWithProviders(<ResumePage />);
    const badges = screen.getAllByTestId("badge");
    expect(badges.length).toBeGreaterThan(0);
  });

  it("applies correct styling to header section", () => {
    const { container } = renderWithProviders(<ResumePage />);
    const header = container.querySelector("header");
    expect(header).toHaveClass("border-b", "border-border", "pb-6");
  });

  it("applies correct styling to name heading", () => {
    const { container } = renderWithProviders(<ResumePage />);
    const h1 = container.querySelector("h1");
    expect(h1).toHaveClass("font-serif", "text-4xl", "text-foreground");
  });

  it("applies correct styling to section headings", () => {
    const { container } = renderWithProviders(<ResumePage />);
    const sectionHeadings = container.querySelectorAll("h2");
    sectionHeadings.forEach((heading) => {
      expect(heading).toHaveClass("font-serif", "text-xl", "text-foreground");
    });
  });

  it("applies responsive grid layout to projects section", () => {
    const { container } = renderWithProviders(<ResumePage />);
    // Check for responsive grid classes
    const grids = container.querySelectorAll(".grid");
    expect(grids.length).toBeGreaterThan(0);
  });

  it("calls window.print when download button is clicked", async () => {
    const printSpy = vi.spyOn(window, "print").mockImplementation(() => {});
    
    renderWithProviders(<ResumePage />);

    const downloadBtn = screen.getByTestId("download-btn");
    downloadBtn.click();
    
    expect(printSpy).toHaveBeenCalled();
    printSpy.mockRestore();
  });

  it("maintains max-width container for readability", () => {
    const { container } = renderWithProviders(<ResumePage />);
    const contentContainer = container.querySelector(".max-w-3xl");
    expect(contentContainer).toBeInTheDocument();
  });

  it("adds proper padding to the page", () => {
    const { container } = renderWithProviders(<ResumePage />);
    const contentContainer = container.querySelector(".pb-24.pt-24");
    expect(contentContainer).toBeInTheDocument();
  });

  it("displays all resume data correctly in one render", () => {
    renderWithProviders(<ResumePage />);

    // Verify all sections and data are present
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
    expect(screen.getByText(/Summary/)).toBeInTheDocument();
    expect(screen.getByText(/Experiences/)).toBeInTheDocument();
    expect(screen.getByText(/Education/)).toBeInTheDocument();
    expect(screen.getByText(/Projects/)).toBeInTheDocument();
  });

  it("renders without errors with complete resume data", () => {
    const { container } = renderWithProviders(<ResumePage />);
    expect(container).toBeInTheDocument();
  });

  it("handles empty projects array gracefully", () => {
    vi.spyOn(resumeModule, "resumeData", "get").mockReturnValue({
      ...mockResumeData,
      projects: [],
    } as any);

    const { container } = renderWithProviders(<ResumePage />);
    expect(container).toBeInTheDocument();
  });

  it("displays contact information with proper icons", () => {
    const { container } = renderWithProviders(<ResumePage />);
    const contactSpans = container.querySelectorAll(".flex.items-center.gap-1");
    expect(contactSpans.length).toBeGreaterThan(0);
  });
});
