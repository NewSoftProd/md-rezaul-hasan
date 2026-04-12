import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin, Globe, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="print:hidden">
        <Navbar />
      </div>

      <div className="container mx-auto max-w-3xl px-4 pb-24 pt-24 print:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Download button */}
          <div className="mb-8 flex justify-end print:hidden">
            <Button onClick={handleDownloadPdf}>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>

          {/* Header */}
          <header className="mb-8 border-b border-border pb-6">
            <h1 className="font-serif text-4xl text-foreground">{resumeData.name}</h1>
            <p className="mt-1 text-lg text-accent">{resumeData.title}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{resumeData.contact.email}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{resumeData.contact.location}</span>
              <span className="flex items-center gap-1"><Globe className="h-3 w-3" />{resumeData.contact.website}</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="mb-3 font-serif text-xl text-foreground">Summary</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{resumeData.summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="mb-4 font-serif text-xl text-foreground">Experiences</h2>
            <div className="space-y-6">
              {resumeData.experience.map((exp) => (
                <div key={exp.title + exp.company}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-accent">{exp.company}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-muted-foreground before:mr-2 before:content-['•']">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="mb-3 font-serif text-xl text-foreground">Education</h2>
            {resumeData.education.map((edu) => (
              <div key={edu.degree} className="flex items-baseline justify-between">
                <div>
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                </div>
                <span className="text-xs text-muted-foreground">{edu.startYear} — {edu.endYear}</span>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="mb-4 font-serif text-xl text-foreground">Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resumeData.projects.map((proj) => (
                <div key={proj.title} className="rounded-lg border border-border bg-card p-4">
                  {proj.imageUrl && (
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="mb-3 h-32 w-full rounded-md object-cover"
                    />
                  )}
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="font-semibold text-foreground">{proj.title}</h3>
                    <Badge variant="default" className={`text-xs ${proj.status === "completed" ? "text-emerald-300 dark:text-sky-400" : "text-blue-200 dark:text-sky-400"}`}>
                      {proj.status}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">{proj.year}</span>
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{proj.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {proj.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-normal">{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-3">
                    {proj.liveUrl && proj.liveUrl !== "#" && (
                      <a href={proj.liveUrl} className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors">
                        <ExternalLink className="h-3 w-3" /> Live
                      </a>
                    )}
                    {proj.repoUrl && proj.repoUrl !== "#" && (
                      <a href={proj.repoUrl} className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors">
                        <Github className="h-3 w-3" /> Repository
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="font-normal">{skill}</Badge>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
