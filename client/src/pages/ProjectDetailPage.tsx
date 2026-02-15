import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Back to Portfolio
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-24">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Projects
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="font-serif text-5xl text-foreground">{project.title}</h1>
              <Badge variant="outline" className="text-accent border-accent">
                {project.status === "current" ? "Current" : "Completed"}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </motion.div>

          {/* Main Image */}
          {project.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 overflow-hidden rounded-lg border border-border shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full object-cover max-h-96"
              />
            </motion.div>
          )}

          {/* Project Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {project.year && (
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  Year
                </div>
                <p className="text-lg font-semibold text-foreground">{project.year}</p>
              </div>
            )}
            {project.role && (
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-2">
                  <Users className="h-4 w-4" />
                  Role
                </div>
                <p className="text-lg font-semibold text-foreground">{project.role}</p>
              </div>
            )}
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="text-xs font-semibold text-muted-foreground mb-2">Status</div>
              <p className="text-lg font-semibold text-foreground capitalize">
                {project.status}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack</div>
              <p className="text-lg font-semibold text-foreground">{project.techStack.length} Technologies</p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 flex gap-3 flex-wrap"
          >
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Live
                </a>
              </Button>
            )}
            {project.repoUrl && project.repoUrl !== "#" && (
              <Button variant="outline" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Repository
                </a>
              </Button>
            )}
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Full Description */}
              {project.fullDescription && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mb-12"
                >
                  <h2 className="mb-4 font-serif text-2xl text-foreground">Overview</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.fullDescription}
                  </p>
                </motion.section>
              )}

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-12"
                >
                  <h2 className="mb-6 font-serif text-2xl text-foreground">Key Features</h2>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="mb-12"
                >
                  <h2 className="mb-6 font-serif text-2xl text-foreground">Challenges</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Solutions */}
              {project.solutions && project.solutions.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-12"
                >
                  <h2 className="mb-6 font-serif text-2xl text-foreground">Solutions Implemented</h2>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sticky top-24 rounded-lg border border-border bg-card p-6 mb-6"
              >
                <h3 className="mb-4 font-serif text-lg text-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Impact */}
              {project.impact && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-lg border border-border bg-card p-6 mb-6"
                >
                  <h3 className="mb-3 font-serif text-lg text-foreground">Impact</h3>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </motion.div>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <h3 className="mb-4 font-serif text-lg text-foreground">Key Learnings</h3>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-accent font-bold">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
