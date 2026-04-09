import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Blog Post Not Found</h1>
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
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Blogs
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* Category Badge */}
            <div className="mb-4">
              <Badge variant="secondary" className="text-sm">
                {blog.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl text-foreground mb-4">{blog.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          {blog.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 overflow-hidden rounded-lg"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-96 object-cover"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert max-w-none mb-12"
          >
            {blog.fullContent.split("\n\n").map((paragraph, index) => {
              // Check if it's a heading
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-serif text-2xl text-foreground mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              
              // Check if it's a code block
              if (paragraph.includes("```")) {
                const parts = paragraph.split("```");
                return (
                  <div key={index}>
                    {parts.map((part, i) => {
                      if (i % 2 === 0) {
                        return part ? (
                          <p key={i} className="text-muted-foreground leading-relaxed">
                            {part}
                          </p>
                        ) : null;
                      } else {
                        const [language, ...codeLines] = part.split("\n");
                        const code = codeLines.slice(0, -1).join("\n");
                        return (
                          <pre
                            key={i}
                            className="bg-secondary text-foreground p-4 rounded-lg overflow-x-auto my-4 text-sm"
                          >
                            <code>{code}</code>
                          </pre>
                        );
                      }
                    })}
                  </div>
                );
              }

              // Regular paragraph
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-border pt-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Back to Blogs CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <Button 
              onClick={() => navigate("/")} 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to All Blogs
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
