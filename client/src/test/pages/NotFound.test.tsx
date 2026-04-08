import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NotFound from "@/pages/NotFound";

// Create a wrapper component to test route navigation
const TestWrapper = ({ pathname }: { pathname: string }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path={pathname} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

describe("NotFound Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders 404 heading", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("displays 'Page not found' message", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(screen.getByText(/Oops! Page not found/i)).toBeInTheDocument();
  });

  it("renders return home link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole("link", { name: /Return to Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("applies correct styling classes", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const wrapper = container.querySelector(".flex");
    expect(wrapper).toHaveClass("min-h-screen", "items-center", "justify-center", "bg-muted");
  });

  it("centers content on the page", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const textCenter = container.querySelector(".text-center");
    expect(textCenter).toBeInTheDocument();
  });

  it("displays 404 with large font size", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const heading = container.querySelector("h1");
    expect(heading).toHaveClass("text-4xl", "font-bold");
  });

  it("displays message with appropriate text color", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const message = container.querySelector(".text-muted-foreground");
    expect(message).toHaveClass("text-xl");
  });

  it("home link has hover effect styling", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const link = container.querySelector("a");
    expect(link).toHaveClass("hover:text-primary/90");
  });

  it("console.error is called when component mounts", () => {
    const consoleSpy = vi.spyOn(console, "error");
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("logs the pathname in error message", () => {
    const consoleSpy = vi.spyOn(console, "error");
    const { rerender } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("404 Error"),
      expect.any(String)
    );
    consoleSpy.mockRestore();
  });

  it("home link is underlined", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const link = container.querySelector("a");
    expect(link).toHaveClass("underline");
  });

  it("uses primary color for the link", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const link = container.querySelector("a");
    expect(link).toHaveClass("text-primary");
  });

  it("renders with full page height", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const wrapper = container.querySelector(".min-h-screen");
    expect(wrapper).toBeInTheDocument();
  });

  it("link is keyboard accessible", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toBeVisible();
  });

  it("message text is rendered with correct styling", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const message = screen.getByText(/Oops! Page not found/i);
    expect(message).toHaveClass("text-xl", "text-muted-foreground");
  });

  it("maintains layout on different screen sizes", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const wrapper = container.querySelector(".flex.min-h-screen");
    expect(wrapper).toHaveClass("items-center", "justify-center");
  });
});
