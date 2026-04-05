import { experiences } from "@/data/experience";
import { educations } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

export const resumeData = {
  name: "MD. Rezaul Hasan",
  title: "Senior Software Engineer",
  summary:
    "Experienced software engineer with 8+ years in web development, specializing in React, Angular, and ASP.NET Core, and cloud technologies. Proven track record of leading teams and delivering scalable solutions. Passionate about mentoring and continuous learning.",
  contact: {
    email: "rezaul@example.com",
    location: "Stockholm, Sweden",
    website: "rezaulhasan.com",
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
    startYear: edu.startDate,
    endYear: edu.endDate,
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
