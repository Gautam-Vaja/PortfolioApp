import { Project, ProjectCategory, SkillCategory, ContactFormData, ValidationResult } from '../types/portfolio';

/**
 * Filter projects by category and optional text query
 */
export function filterProjects(
  projects: Project[],
  category: ProjectCategory,
  searchQuery = ''
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'all' ? true : project.category === category;

    if (!matchesCategory) return false;

    if (!query) return true;

    const inTitle = project.title.toLowerCase().includes(query);
    const inSubtitle = project.subtitle.toLowerCase().includes(query);
    const inDesc = project.description.toLowerCase().includes(query);
    const inTech = project.technologies.some((t) => t.toLowerCase().includes(query));

    return inTitle || inSubtitle || inDesc || inTech;
  });
}

/**
 * Filter and search across skill categories
 */
export function searchSkills(
  categories: SkillCategory[],
  query: string
): SkillCategory[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return categories;

  return categories
    .map((category) => {
      const filteredSkills = category.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(trimmed) ||
          skill.description.toLowerCase().includes(trimmed) ||
          category.title.toLowerCase().includes(trimmed)
      );

      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter((category) => category.skills.length > 0);
}

/**
 * Sanitize user input to avoid script injections or malformed strings
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim();
}

/**
 * Validate contact form data with clear rules
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const name = sanitizeInput(data.name || '');
  const email = sanitizeInput(data.email || '');
  const subject = sanitizeInput(data.subject || '');
  const message = sanitizeInput(data.message || '');

  if (!name || name.length < 2) {
    errors.name = 'Please provide your name (at least 2 characters).';
  }

  // RFC 5322 compliant email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = 'Please provide an email address.';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address (e.g. user@domain.com).';
  }

  if (!subject || subject.length < 3) {
    errors.subject = 'Please enter a subject (at least 3 characters).';
  }

  if (!message || message.length < 10) {
    errors.message = 'Please write a message with at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Calculate total skills across all categories
 */
export function calculateTotalSkillsCount(categories: SkillCategory[]): number {
  return categories.reduce((acc, cat) => acc + cat.skills.length, 0);
}

/**
 * Format project technologies as readable bullet string
 */
export function formatProjectTechStack(technologies: string[], limit = 4): string {
  if (!technologies || technologies.length === 0) return '';
  const visible = technologies.slice(0, limit);
  const remaining = technologies.length - limit;
  const base = visible.join(' · ');
  return remaining > 0 ? `${base} (+${remaining} more)` : base;
}
