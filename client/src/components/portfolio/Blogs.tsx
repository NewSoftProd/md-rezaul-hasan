import { motion } from "framer-motion";
import { ArrowRight, Bookmark, Calendar, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";

function BlogCard({ blog, index }: { blog: any; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md cursor-pointer h-full"
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      {/* Image area */}
      <div className="flex h-44 items-center justify-center bg-secondary overflow-hidden">
        {blog.imageUrl ? (
          <img 
            src={blog.imageUrl} 
            alt={blog.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="font-serif text-2xl text-muted-foreground/40">{blog.title[0]}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Category and Read Time */}
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs font-normal">
            {blog.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{blog.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg text-foreground line-clamp-2">{blog.title}</h3>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{blog.description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {blog.tags.slice(0, 2).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer with date and button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-accent hover:text-accent/80"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/blog/${blog.id}`);
            }}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function Blogs() {
  const navigate = useNavigate();

  return (
    <section id="blogs" className="border-t border-border py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 className="font-serif text-4xl text-foreground mb-4">Blogs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts and insights on web development, programming, and technology trends.
            </p>
          </div>
          <Button 
            onClick={() => navigate("/write-blog")}
            className="bg-accent hover:bg-accent/90 text-background font-medium gap-2 whitespace-nowrap"
          >
            <Plus className="h-4 w-4" />
            Write Blog
          </Button>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
