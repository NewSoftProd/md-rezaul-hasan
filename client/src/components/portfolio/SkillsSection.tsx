import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Expertise</p>
          <h2 className="mt-2 font-serif text-4xl text-foreground">Skills</h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-4 font-serif text-lg text-foreground">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
