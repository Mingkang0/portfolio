import { Experience, SkillCategory, Project } from "../types";
import { Code, Smartphone, Database, TerminalSquare, Sparkles } from "lucide-react";

export const personalInfo = {
  name: "Sho Ming Kang",
  profilePicture: "/profilePicture.jpeg",
  title: "Software Engineer",
  contact: {
    email: "shoning858@gmail.com",
    github: "https://github.com/Mingkang0",
    linkedin: "https://www.linkedin.com/in/sho-ming-kang-3412a21a3/",
  },
  summary: <p className="mb-6 text-muted-foreground">
    I'm a fresh Software Engineering graduate with a passion for web and mobile development, and a strong interest in building user-friendly digital solutions.
    During my internship as a Front-End Developer, I worked with React, GraphQL, and MobX to create responsive and interactive interfaces, and integrated dynamic data from backend services to enhance user experiences.<br /><br />
    While my focus is on frontend development with React and TypeScript, I'm also comfortable with backend technologies like Laravel, ASP.Net, Node.js, MySQL and PostgreSQL.
  </p>
}

export const softSkills = [
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Communication",
  "Critical Thinking",
];

export const skillCategories: Array<SkillCategory> = [
  {
    title: "Web Development",
    icon: Code,
    skills: [
      "React", "Next.js", "Laravel", "Vue.js", "Bootstrap", "ASP.NET", "Express.js", "MobX"
    ],
  },
  {
    title: "UI Libraries & Frameworks",
    icon: Sparkles,
    skills: ["Tailwind CSS", "Flowbite", "Bootstrap", "Shadcn UI", "Bulma", "Styled Components"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Ionic", "React Native", "Android Studio", "Firebase"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "Programming Languages",
    icon: TerminalSquare,
    skills: ["JavaScript", "TypeScript", "Java", "C#", "C", "Python"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer Intern",
    company: "Simpletruss Sdn Bhd",
    companyUrl: "https://www.simpletruss.com/",
    location: "Kuala Lumpur, Malaysia",
    type: "Internship",
    startDate: "2025-2-17",
    endDate: undefined,
    description:
      "Building reusable React components, optimizing frontend performance, and integrating APIs for seamless user experiences.",
    responsibilities: [
      "Collaborated with cross-functional teams to deliver responsive web applications.",
      "Developed and maintained responsive UIs based on UI/UX mockups using React.js and Styled Components.",
      "Built and maintained reusable React components following company’s coding standards and best practices.",
      "Integrated backend GraphQL APIs using Apollo Client to fetch and manage dynamic data in React components.",
      "Utilized MobX for state management to synchronize data across client, affiliate, and internal portals.",
      "Participated in Agile development, contributing to sprint planning, daily stand-ups, and iterative feature delivery.",
      "Built a chatbot during the company AI Hackathon to enhance communication between residents, location managers, and clients using an internal AI agent. Contributed to frontend integration and project presentation.",
    ],
    skills: [
      "React",
      "TypeScript",
      "MobX",
      "Styled-Components",
      "GraphQL",
      "Apollo Client",
      "Git",
      "APIs Integration",
    ],
    logo: "/images/companies/simpletruss.jpeg",
    projects: [
      {
        title: "Vendor Marketplace - Lessen",
        description:
          "The Lessen Marketplace is a centralized platform offering access to thousands of products and services designed to reduce costs and accelerate growth. Backed by a trusted network of suppliers, it delivers substantial savings across a wide range of materials, products, and financial services.",
        demo: "https://marketplace.lessen.com/",
        techStacks: [
          "React",
          "TypeScript",
          "Styled-Components",
          "Git",
          "APIs Integration",
        ],
      },
      {
        title: "One Vendor Portal, One Client Portal, One Portal - Lessen",
        description:
          "One by Lessen is a unified property management platform with dedicated portals for clients, vendors, and internal teams to streamline work orders, collaboration, and operations.",
        techStacks: [
          "React",
          "TypeScript",
          "MobX",
          "Styled-Components",
          "GraphQL",
          "Apollo Client",
          "Git",
          "APIs Integration",
        ],
      }
    ],
  },
]

export const educations = [
  {
    degree: "Bachelor of Computer Science (Software Engineering) with Honours",
    institution: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
    location: "Pahang, Malaysia",
    startDate: "2021-10-11",
    endDate: "2025-08-22",
    description:
      "Taken core courses for software development such as Object-Oriented Programming (OOP), Software Requirements & Design Workshop, Data Structure and Algorithm, Human-Computer Interaction,Programming Techniques, Web Engineering and Algorithm & Complexity. Exposed to technologies such as Mobile App Development, Game Development, and Data Visualization & Analytics through elective courses.",
    achievements: [
      "Gold Medalist, FYPro-Com Exhibition Semester 1 2024/2025 – Project: Internseek",
      "Gold Medalist in Education Category, Creative and Innovative Technology Research Exposition (CITREX) 2025 – Project: Internseek",
      "Top 10 Finalist, UMPSA x Huawei Mobile App Competition 2023 – Project: CodeQuizPro",
      "Dean List",
    ],
    logo: "/images/institutions/umpsa.png",
    cgpa: "3.86",
    institutionUrl: "https://umpsa.edu.my/",
    techStacks: [
      "Laravel",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "Java",
      "C#",
      "C",
      "Android Studio",
      "Firebase",
      "MySQL",
      "TypeScript",
      "ReactJS",
      "Linux",
      "Python",
      "Git",
    ],
  },
  {
    degree: "Sijil Tinggi Persekolahan Malaysia (STPM) – Science Stream (Physics)",
    institution: "Sekolah Menengah Kebangsaan (SMK) Mentakab",
    location: "Pahang, Malaysia",
    startDate: "2019-05-02",
    endDate: "2021-03-05",
    description:
      "Studied core subjects including Physics, Mathematics, Chemistry, and Pengajian Am. Developed strong analytical and problem-solving skills through practical experiments and theoretical studies.",
    logo: "/images/institutions/smkm.png",
    cgpa: "3.75",
    documents: [
      {
        name: "Transcript",
        url: "/cert/stpm.pdf",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences. Built with Next.js and TailwindCSS, it features a responsive design and smooth animations.",
    image: "/images/projects/portfolio.png",
    github: "https://github.com/Mingkang0/portfolio",
    demo: "https://Mingkang0.vercel.app/",
    status: "Maintaining",
    techStacks: ["Next.js", "TailwindCSS", "Shadcn", "React"],
    date: "2025-6-29",
  },
  {
    title: "Internseek",
    description:
      "A comprehensive internship application system designed to streamline the internship application process for students and recruitment process for employers.",
    image: "/images/projects/Internseek.png",
    github: "https://github.com/Mingkang0/Internseek",
    demo: "https://internseek.raegrp.com/",
    status: "Completed",
    techStacks: [
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "TailwindCSS",
      "Flowbite",
      "JavaScript",
    ],
    date: "2025-1-26",
  },
  {
    title: "File Management System",
    description:
      "A web-based application for managing files and folders, built using Vue.js for the front-end and Node.js for the back-end. The application communicates via a RESTful API to handle file and folder operations.",
    github: "https://github.com/Mingkang0/File-Management-System",
    image: "/images/projects/file-management.png",
    status: "Completed",
    techStacks: ["Vue.js", "Node.js", "Express.js", "PostgreSQL", "Restful API"],
    date: "2024-12-04",
  },
  {
    title: "Task Management System",
    description:
      "A web-based application for managing tasks, built using React for the front-end and ASP.NET for the back-end. The application communicates via a RESTful API to handle task operations.",
    github: "https://github.com/Mingkang0/Task-Management-System",
    status: "Completed",
    image: "/images/projects/task-management.png",
    techStacks: ["React", "ASP.NET", "C#", "SQL Server", "Restful API"],
    date: "2025-6-30",
  },
  {
    title: "EOS Residence",
    description:
      "A business landing page for EOS Residence, built using Next.js and TailwindCSS. The page showcases the company's services and contact information.",
    image: "/images/projects/eos-residence.png",
    demo: "https://eos-residence.pages.dev/",
    techStacks: ["Next.js", "TailwindCSS", "React"],
    status: "Maintaining",
    date: "2025-06-19",
  },
  {
    title: "CodeQuizPro",
    description: "A mobile application for practicing coding questions, built using Ionic and React. The app provides a platform for users to solve coding challenges and improve their programming skills.",
    image: "/images/projects/codequizpro.jpg",
    github: "https://github.com/Mingkang0/CodeQuizPro",
    techStacks: ["Ionic", "React", "TypeScript", "Firebase"],
    status: "Completed",
    date: "2023-10-28",
  },
  {
    title: "Eventify",
    description:
      "Mobile app to assist users in planning and managing events, built with Firebase and Android Studio. The app allows users to manage event details, invite participants, and write reviews.",
    image: "/images/projects/eventify.jpg",
    github: "https://github.com/JyzPoohs/Eventify",
    techStacks: ["Android Studio", "Firebase", "Java"],
    status: "Completed",
    date: "2024-01-23"
  },
  {
    title: "KAFA Management System",
    description:
      "A web-based application for managing KAFA (Kelas Al-Quran dan Fardhu Ain) activities, built using Laravel and Vue.js. The application allows users to manage student registrations, activities scheduling, and exam results.",
    image: "/images/projects/kafa-management.png",
    github: "http://github.com/Hammershark224/KMS",
    techStacks: ["Laravel", "Bootstrap", "PHP", "MySQL"],
    status: "Completed",
    date: "2024-06-23",
  },
  {
    title: "FK-EduSearch",
    description:
      "A forum-style social media platform for students & experts in Faculty of Computing (FK), built using PHP, Bootstrap, and MySQL. The platform allows users to post questions, share knowledge, and engage in discussions related to computing topics.",
    image: "/images/projects/fk-edusearch.png",
    github: "https://github.com/zhaolinlau/FK-EduSearch",
    techStacks: ["Bootstrap", "PHP", "MySQL"],
    status: "Completed",
    date: "2023-07-03",
  },
  {
    title: "FYP Management System",
    description:
      "A web-based application for managing final year projects, built using PHP, Bootstrap and MySQL. The application allows students to choose propose projects and find supervisors and book a meeting with their supervisors.",
    image: "/images/projects/fyp-management.png",
    techStacks: ["Laravel", "Bootstrap", "PHP", "MySQL"],
    status: "Completed",
    date: "2023-05-29",
  }
];