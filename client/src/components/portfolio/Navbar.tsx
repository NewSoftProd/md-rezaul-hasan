import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isResumePage = location.pathname === "/resume";

  const handleExperienceClick = () => {
    navigate("/#experience");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
          MD REZAUL HASAN
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {isResumePage ? (
            <li>
              <button
                onClick={handleExperienceClick}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Experience
              </button>
            </li>
          ) : (
            navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <ul className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {isResumePage ? (
              <li>
                <button
                  onClick={() => {
                    handleExperienceClick();
                    setMobileOpen(false);
                  }}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Experience
                </button>
              </li>
            ) : (
              navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
