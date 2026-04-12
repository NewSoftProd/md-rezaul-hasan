import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-7xl"
        >
          Building digital experiences that matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
        >
          I craft clean, scalable software with a focus on performance, usability, and thoughtful engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
        >
          <a
            href="#experience"
            className="relative inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-6 py-3 text-sm font-medium text-accent transition-all hover:border-accent hover:bg-accent/10 hover:shadow-lg"
          >
            Explore my work
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
          <a
            href="#blogs"
            className="relative inline-flex items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-400/5 px-6 py-3 text-sm font-medium text-blue-600 transition-all hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-lg dark:text-blue-400"
          >
            Explore my blogs
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
