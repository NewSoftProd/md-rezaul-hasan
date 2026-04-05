export interface Education {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export const educations: Education[] = [
  {
    id: "1",
    title: "Master's degree in Software engineering of distributed systems",
    company: "KTH Royal Institute of Technology",
    startDate: "August 2019",
    endDate: "Pause",
    description:
      "Software engineer specializing in distributed systems architecture with a focus on blockchain technologies. Experienced in building fault-tolerant, scalable systems that handle consensus mechanisms, peer-to-peer networking, and decentralized data management. Skilled in developing smart contracts, implementing cryptographic protocols, and designing distributed applications that maintain consistency and availability across network partitions.",
    skills:["Docker", "Thread modeling", "Concurency", "Tendermint Network", "Dynamic programming","DevOps", "etc." ]
  },
  {
    id: "2",
    title: "Bachelor's degree in Computer Science and Engineering",
    company: "International Islamic University Chittagong",
    startDate: "January 2012",
    endDate: "January 2017",
    description:
      "Bachelor's degree in Computer Science and Engineering with strong foundations in algorithms, data structures, and computational theory. Coursework covered programming paradigms, discrete mathematics, database systems, operating systems, and computer architecture. Specialized in system design principles, parallel programming techniques, and algorithmic problem-solving. Developed expertise in analyzing time and space complexity, designing scalable solutions, and implementing efficient code across multiple programming languages.",
    skills:["Distributed database", "C programing language", "Algorithms", "Data structures", "System Design","Operating Systems" ]

  }
];
