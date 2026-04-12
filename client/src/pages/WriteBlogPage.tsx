import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { blogs, Blog } from "@/data/blogs";

export default function WriteBlogPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    fullContent: "",
    author: "Rezaul Hasan",
    category: "Frontend",
    imageUrl: "",
    tags: [] as string[],
    readTime: "",
  });
  const [currentTag, setCurrentTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["Frontend", "Backend", "JavaScript", "TypeScript", "React", "Node.js", "DevOps", "Other"];
  const commonTags = ["React", "TypeScript", "JavaScript", "Node.js", "Web Development", "CSS", "Tailwind", "Database"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTag = (tag: string) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
    setCurrentTag("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove),
    }));
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim() || !formData.description.trim() || !formData.fullContent.trim()) {
      alert("Please fill in title, description, and content");
      return;
    }

    setIsSubmitting(true);

    // Calculate read time
    const readTime = calculateReadTime(formData.fullContent);

    // Create new blog
    const newBlog: Blog = {
      id: String(blogs.length + 1),
      title: formData.title,
      description: formData.description,
      fullContent: formData.fullContent,
      author: formData.author,
      date: new Date().toISOString().split('T')[0],
      readTime: readTime,
      category: formData.category,
      imageUrl: formData.imageUrl || undefined,
      tags: formData.tags,
    };

    // Add to blogs array
    blogs.push(newBlog);

    // Show success and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(`/blog/${newBlog.id}`);
    }, 500);
  };

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
            Back
          </motion.button>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="font-serif text-4xl text-foreground mb-2">Write a Blog Post</h1>
            <p className="text-muted-foreground">Share your thoughts and knowledge with the world.</p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card border border-border rounded-lg p-6"
          >
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Title *</label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter blog title"
                className="bg-background border-border"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Description *</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter a short description (will be shown in blog card)"
                className="bg-background border-border min-h-20"
                required
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Content *</label>
              <Textarea
                name="fullContent"
                value={formData.fullContent}
                onChange={handleInputChange}
                placeholder="Write your blog content here (supports markdown)"
                className="bg-background border-border min-h-64"
                required
              />
              <p className="text-xs text-muted-foreground">
                Supports markdown formatting for better content styling.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm text-foreground"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Author */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Author</label>
                <Input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Author name"
                  className="bg-background border-border"
                  disabled
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Image URL</label>
              <Input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/image.png (optional)"
                className="bg-background border-border"
              />
            </div>

            {/* Tags */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Tags</label>
              
              {/* Quick Add Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {commonTags.map(tag => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-accent hover:text-background transition-colors"
                    onClick={() => handleAddTag(tag)}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Tag Input */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag(currentTag);
                    }
                  }}
                  placeholder="Type a tag and press Enter or click above"
                  className="bg-background border-border flex-1"
                />
                <Button
                  type="button"
                  onClick={() => handleAddTag(currentTag)}
                  variant="outline"
                  size="sm"
                >
                  Add
                </Button>
              </div>

              {/* Selected Tags */}
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {formData.tags.map(tag => (
                    <Badge key={tag} className="bg-accent text-background">
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 hover:opacity-70"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex gap-3 pt-6 border-t border-border">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent/90 text-background font-medium flex-1"
              >
                {isSubmitting ? "Publishing..." : "Publish Blog"}
              </Button>
              <Button
                type="button"
                onClick={() => navigate("/")}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </motion.form>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 p-4 bg-secondary/50 border border-border rounded-lg"
          >
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Your blog will be added to the portfolio and displayed on the main page. You can still edit the data in the <code className="bg-background px-2 py-1 rounded">blogs.ts</code> file.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
