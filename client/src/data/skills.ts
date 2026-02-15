export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { category: "Languages", skills: ["C#","TypeScript", "Python", "SQL"] },
  { category: "Frameworks", skills: ["ASP.NET", "React", "Angular", "Tailwind CSS"] },
  { category: "Tools & Platforms", skills: ["Git", "Docker", "CI/CD", "VS Code", "Linux","Github Actions","Azure DevOps"] },
  { category: "Cloud & Data", skills: ["GCP", "Neon", "PostgreSQL","MSSQL", "Redis"] },
];
