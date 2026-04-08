import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/test-utils";
import NotFound from "@/pages/NotFound";

describe("NotFound Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders 404 heading", () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("displays 'Page not found' message", () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText(/Oops! Page not found/i)).toBeInTheDocument();
  });

  it("renders return home link", () => {
    renderWithProviders(<NotFound />);
    const homeLink = screen.getByRole("link", { name: /Return to Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("applies correct styling classes", () => {
    const { container } = renderWithProviders(<NotFound />);
    const wrapper = container.querySelector(".min-h-screen.bg-muted");
    expect(wrapper).toHaveClass("flex", "items-center", "justify-center");
  });

  it("centers content on the page", () => {
    const { container } = renderWithProviders(<NotFound />);
    const textCenter = container.querySelector(".text-center");
    expect(textCenter).toBeInTheDocument();
  });

  it("displays 404 with large font size", () => {
    const { container } = renderWithProviders(<NotFound />);
    const heading = container.querySelector("h1");
    expect(heading).toHaveClass("text-4xl", "font-bold");
  });

  it("displays message with appropriate text color", () => {
    const { container } = renderWithProviders(<NotFound />);
    const message = container.querySelector(".text-muted-foreground");
    expect(message).toHaveClass("text-xl");
  });

  it("home link has hover effect styling", () => {
    const { container } = renderWithProviders(<NotFound />);
    const link = container.querySelector("a");
    expect(link).toHaveClass("hover:text-primary/90");
  });

  it("console.error is called when component mounts", () => {
    const consoleSpy = vi.spyOn(console, "error");
    renderWithProviders(<NotFound />);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("logs the pathname in error message", () => {
    const consoleSpy = vi.spyOn(console, "error");
    renderWithProviders(<NotFound />);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("404 Error"),
      expect.any(String)
    );
    consoleSpy.mockRestore();
  });

  it("home link is underlined", () => {
    const { container } = renderWithProviders(<NotFound />);
    const link = container.querySelector("a");
    expect(link).toHaveClass("underline");
  });

  it("uses primary color for the link", () => {
    const { container } = renderWithProviders(<NotFound />);
    const link = container.querySelector("a");
    expect(link).toHaveClass("text-primary");
  });

  it("renders with full page height", () => {
    const { container } = renderWithProviders(<NotFound />);
    const wrapper = container.querySelector(".min-h-screen");
    expect(wrapper).toBeInTheDocument();
  });

  it("link is keyboard accessible", () => {
    renderWithProviders(<NotFound />);
    const link = screen.getByRole("link");
    expect(link).toBeVisible();
  });

  it("message text is rendered with correct styling", () => {
    const { container } = renderWithProviders(<NotFound />);
    const message = screen.getByText(/Oops! Page not found/i);
    expect(message).toHaveClass("text-xl", "text-muted-foreground");
  });

  it("maintains layout on different screen sizes", () => {
    const { container } = renderWithProviders(<NotFound />);
    const wrapper = container.querySelector(".flex.min-h-screen");
    expect(wrapper).toHaveClass("items-center", "justify-center");
  });
});
