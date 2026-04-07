export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [];

// Web Development
const webDev: Skill[] = [
  {
    title: 'Node.js',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Spring Webflux',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Spring',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'NestJS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'VueJs',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Angular',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'MicroFront',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'NextJS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Storybook',
    competency: 3,
    category: ['Web Development'],
  },

  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
];

// Languages
const languages: Skill[] = [
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Javascript',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Kotlin',
    competency: 3,
    category: ['Languages'],
  },
];

// CI/CD - Infrastructure
const infra: Skill[] = [
  {
    title: 'AWS',
    competency: 2,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Github Actions',
    competency: 3,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Gitlab CI',
    competency: 4,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'GCP',
    competency: 2,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Amplify',
    competency: 2,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Openshift',
    competency: 2,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Terraform',
    competency: 2,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Datadog',
    competency: 3,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'ArgoCD',
    competency: 2,
    category: ['CI/CD - Infrastructure'],
  },
  {
    title: 'Dokploy',
    competency: 2,
    category: ['CI/CD - Infrastructure'],
  },
];

// Databases
const databases: Skill[] = [
  {
    title: 'PostgreSQL',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Oracle',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'IPFS',
    competency: 3,
    category: ['Databases'],
  },
];

// Ontology
const ontology: Skill[] = [
  {
    title: 'RDF',
    competency: 3,
    category: ['Ontology'],
  },
  {
    title: 'OWL',
    competency: 3,
    category: ['Ontology'],
  },
  {
    title: 'SHACL',
    competency: 3,
    category: ['Ontology'],
  },
  {
    title: 'SPARQL',
    competency: 3,
    category: ['Ontology'],
  },
  {
    title: 'ODRL',
    competency: 5,
    category: ['Ontology'],
  },
  {
    title: 'JSON-LD',
    competency: 4,
    category: ['Ontology'],
  },
];

// Others
const others: Skill[] = [
  {
    title: 'REST',
    competency: 5,
    category: ['Others', 'Web Development'],
  },
  {
    title: 'Kafka',
    competency: 3,
    category: ['Others'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Others'],
  },
  {
    title: 'Quarkus',
    competency: 2,
    category: ['Others'],
  },
  {
    title: 'Android',
    competency: 3,
    category: ['Others'],
  },
  {
    title: 'Unity',
    competency: 2,
    category: ['Others'],
  },
  {
    title: 'Accessibility',
    competency: 3,
    category: ['Others', 'Web Development'],
  },
];

skills.push(...webDev);
skills.push(...languages);
skills.push(...infra);
skills.push(...databases);
skills.push(...ontology);
skills.push(...others);

skills.map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 *
 * Hex values from tailwind.css @theme block:
 * --color-skill-1: #6968b3, --color-skill-2: #37b1f5, --color-skill-3: #40494e
 * --color-skill-4: #515dd4, --color-skill-5: #e47272, --color-skill-6: #cc7b94
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' }, // #6968b3 - dark bg
  { color: 'var(--color-skill-2)', textColor: 'dark' }, // #37b1f5 - light bg
  { color: 'var(--color-skill-3)', textColor: 'light' }, // #40494e - dark bg
  { color: 'var(--color-skill-4)', textColor: 'light' }, // #515dd4 - dark bg
  { color: 'var(--color-skill-5)', textColor: 'dark' }, // #e47272 - light bg
  { color: 'var(--color-skill-6)', textColor: 'dark' }, // #cc7b94 - light bg
];

// Fallback colors for categories beyond the predefined set (with pre-computed contrast)
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with type-safe color assignment.
 * Logs a warning in development if there are more categories than colors.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  );

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (process.env.NODE_ENV === 'development' && uniqueCategories.length > allColors.length) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
