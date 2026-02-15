import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { ProjectsShowcase } from "@/components/portfolio/ProjectsShowcase";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { LearningTopics } from "@/components/portfolio/LearningTopics";
import { Footer } from "@/components/portfolio/Footer";
import {EducationTimeline} from "@/components/portfolio/EducationTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <SkillsSection />
        <LearningTopics />
        <EducationTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
