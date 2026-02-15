import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import { learningTopics } from "@/data/learning";

export function LearningTopics() {
  return (
    <section id="learning" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Growth</p>
          <h2 className="mt-2 font-serif text-4xl text-foreground">Currently Learning</h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {learningTopics.map((topic, i) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-accent">{topic.status}</span>
              </div>
              <h3 className="font-serif text-lg text-foreground">{topic.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
