
export interface LearningTopic {
  id: string;
  name: string;
  description: string;
  status: "In Progress" | "Completed" | "Starting";
}

export const learningTopics: LearningTopic[] = [
  {
    id: "1",
    name: "GO Programming language",
    description: "Exploring GO language for high-performance cloud native applications and cross-platform tooling.",
    status: "In Progress",
  },
  {
    id: "2",
    name: "System Design",
    description: "Deep-diving into distributed systems, message queues, and scalability patterns.",
    status: "In Progress",
  },
  {
    id: "3",
    name: "AI / ML Fundamentals",
    description: "Learning the foundations of machine learning with practical applications in software products.",
    status: "Starting",
  },
  {
    id: "4",
    name: "Trading/ Investment Strategies",
    description: "Learning the foundations of trading and investment strategies to build financial applications and planning to have day trading skills as part time.",
    status: "Starting",
  }
];