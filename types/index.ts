export interface SkillCategory {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  logo: string;
  projects?: Project[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  github?: string;
  demo?: string;
  status?: string;
  techStacks: string[];
  date?: string;
}