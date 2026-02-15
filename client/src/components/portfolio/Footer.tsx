import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
