export type ProjectCategory = 'all' | 'mobile' | 'ai-backend' | 'react';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  badge: string;
  accentColor: string;
  visualType: 'pilonmagic' | 'ai-assistant' | 'weather' | 'mini-social' | 'expense' | 'attendance';
}

export interface SkillCategory {
  title: string;
  id: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Proficient', 'Core'
    highlight?: boolean;
    description: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  type: string;
  description: string;
  technologies: string[];
  achievements: string[];
  projectTitle?: string;
  projectPeriod?: string;
  projectAchievements?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  grade?: string;
  description?: string;
  keyAreas?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}
