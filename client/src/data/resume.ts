import { experiences } from "@/data/experience";
import { educations } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

export const resumeData = {
  name: "John Developer",
  title: "Senior Software Engineer",
  summary:
    "Results-driven software engineer with 5+ years of experience building scalable web applications. Passionate about clean architecture, developer experience, and shipping products that solve real problems.",
  contact: {
    email: "john@example.com",
    location: "San Francisco, CA",
    website: "johndeveloper.com",
  },
  experience: experiences.map((exp) => ({
    title: exp.title,
    company: exp.company,
    period: `${exp.startDate} — ${exp.endDate}`,
    highlights: [exp.description],
  })),
  education: educations.map((edu) => ({
    degree: edu.title,
    school: edu.company,
    year: edu.startDate,
  })),
  projects: projects.map((proj) => ({
    title: proj.title,
    description: proj.description,
    techStack: proj.techStack,
    year: proj.year,
    imageUrl: proj.imageUrl,
    status: proj.status,
    liveUrl: proj.liveUrl,
    repoUrl: proj.repoUrl,
  })),
  skills: skillCategories.flatMap((cat) => cat.skills),
};
