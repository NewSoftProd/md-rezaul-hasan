import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md cursor-pointer"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      {/* Image area */}
      <div className="flex h-44 items-center justify-center bg-secondary overflow-hidden">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="font-serif text-2xl text-muted-foreground/40">{project.title[0]}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/project/${project.id}`);
            }}
          >
            <ArrowRight className="mr-1.5 h-3 w-3" /> Details
          </Button>
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <ExternalLink className="mr-1.5 h-3 w-3" /> Live
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <Github className="mr-1.5 h-3 w-3" /> Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsShowcase() {
  const currentProjects = projects.filter((p) => p.status === "current");
  const completedProjects = projects.filter((p) => p.status === "completed");

  return (
    <section id="projects" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Portfolio</p>
          <h2 className="mt-2 font-serif text-4xl text-foreground">Projects</h2>
        </motion.div>

        {/* Current Projects */}
        {currentProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-6 text-base font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest">Currently Working On</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-widest text-emerald-600 dark:text-sky-400">Completed</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {completedProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
