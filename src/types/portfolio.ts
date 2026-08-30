export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  category: "Full Stack" | "Frontend & UI" | "AI & Cloud" | "Mobile / Cross-Platform";
  featured?: boolean;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Work" | "Education" | "Milestone";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
}
