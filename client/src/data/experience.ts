export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Tech Lead | Backend & DevOps Infrastructure Engineer",
    company: "SEB Bank",
    startDate: "March 2025",
    endDate: "Present",
    description:
      "As a Tech Lead, I empower our team by building a scalable DevOps infrastructure with a strong CI/CD focus. I drive automation, streamline deployments, and contribute to API development in .NET, along with MFE UIs in Next.js/Angular when needed. My goal is to enhance software delivery, reliability, and innovation through collaboration and technical excellence.",
    skills:["ASP.NET Web API", "React", "Angular", "Github Actions", "Openshift","Nextjs" ]
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "SEB Bank",
    startDate: "November 2023",
    endDate: "March 2025",
    description:
      "Building KYC applications for risk review means creating systems that verify customer identities, screen against sanctions and PEP lists, and flag potential risks—all while keeping the process smooth for legitimate users. The key is balancing strong compliance controls with intuitive workflows that help risk analysts make fast, informed decisions. Good KYC apps automate routine checks, surface high-risk cases for human review, and maintain clear audit trails for regulators.",
    skills:["ASP.NET Web API", "ASP.NET Core MVC", "Angular", "Azure DevOps", "Docker Swarm","MSSQL" ]

  },
  {
    id: "3",
    title: "Software Engineer | DevOps | Mainframe Modernization",
    company: "SEB Bank",
    startDate: "September 2021",
    endDate: "November 2023",
    description:
      "Software engineer specializing in DevOps practices and mainframe modernization initiatives. Focused on bridging legacy systems with modern cloud infrastructure, implementing CI/CD pipelines, and transforming traditional mainframe environments into agile, scalable platforms. Experienced in containerization, automation, and migrating critical business applications from COBOL and JCL to contemporary tech stacks while maintaining system reliability and performance.",
    skills:["ASP.NET Web API", "Angular", "Azure DevOps", "Docker Swarm","Jenkins","DBB","UCD", "MSSQL", "GCP" ]
  },
];



// "title": "Tech Lead | Backend & DevOps Infrastructure Engineer",
//     "company": "SEB Bank",
//     "startDate": "2025-03-01T00:00:00Z",
//     "endDate": null,
//     "description":
//       "As a Tech Lead, I empower our team by building a scalable DevOps infrastructure with a strong CI/CD focus. I drive automation, streamline deployments, and contribute to API development in .NET, along with MFE UIs in Next.js/Angular when needed. My goal is to enhance software delivery, reliability, and innovation through collaboration and technical excellence.",
//     "skills":["ASP.NET Web API", "React", "Angular", "Github Actions", "Openshift","Nextjs" ]
 