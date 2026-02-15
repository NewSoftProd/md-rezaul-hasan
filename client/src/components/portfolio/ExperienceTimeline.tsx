import { motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Career</p>
          <h2 className="mt-2 font-serif text-4xl text-foreground">Work Experience</h2>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-12 pl-14 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute left-3 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>

              <div className={`md:w-[45%] ${i % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8 md:text-right"}`}>
                <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <Briefcase className="h-3 w-3" />
                    {exp.startDate} — {exp.endDate}
                  </div>
                  <h3 className="mt-2 font-serif text-lg text-foreground">{exp.title}</h3>
                  <p className="text-sm font-medium text-accent">{exp.company}</p>
                  <button
                    onClick={() => toggleExpanded(exp.id)}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    {expandedId === exp.id ? "Hide" : "Show"} Details
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        expandedId === exp.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedId === exp.id && (
                    <>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill}  className="text-xs font-normal text-yellow-600 border-yellow-600 bg-white-100/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
