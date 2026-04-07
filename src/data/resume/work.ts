/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  projectName?: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  techStack?: string[];
}

export const currentPosition: string = 'Tech Lead at Gaia-X AISBL';

export const work: Position[] = [
  {
    name: 'Gaia-X',
    position: 'Technical Lead',
    url: 'https://gaia-x.eu',
    startDate: '2023-05-01',
    summary: `Gaia-X is a European initiative launched to create a trusted and sovereign data and cloud ecosystem by defining rules, standards for how
services should operate. Gaia-X promotes interoperability, helps reduce dependency on a single vendor and avoids lock-in as well as being
closely aligned with European regulations such as GDPR to strengthen Europe’s digital sovereignty and trust in cloud and data services.`,
    highlights: [
      'Tech Lead within the CTO Team',
      'Working on decentralized software components deployed by several providers',
      'Contributions to Standards from W3C and Eclipse Foundation',
      'Create the architecture for all new software components',
      'Managing Kubernetes Clusters and Gitlab CI',
      'Project Management (Tasks, Roadmap, Planning)',
      'Contribution to an e-learning platform',
      'Speaking and representing the association on multiple events and conferences',
      'Organizing workshops, hackathons and events all over Europe',
    ],
    techStack: [
      'Typescript',
      'Kotlin',
      'NestJS',
      'React',
      'Quarkus',
      'Python',
      'Gitlab CI',
      'Kubernetes',
      'Helm',
      'IPFS',
      'SPARQL',
      'OWL',
      'GraphDB',
    ],
  },
  {
    name: 'ADEO',
    projectName: 'Tempo Checkout Delivery',
    position: 'Frontend Lead Developer',
    url: 'https://www.leroymerlin.fr/checkout/delivery',
    startDate: '2022-12-01',
    endDate: '2023-04-30',
    summary: `Working as a feature team for the delivery step on the checkout funnel of Leroy Merlin site for multiple business units and a complete stack (front to back) which includes the front of the delivery page and multiple APIs in charge of managing several business rules related to delivery and shipping.`,
    highlights: [
      'Lead developer on the frontend.',
      'Set up CI/CD pipelines using Github Actions.',
      'Automated monitoring (SLO, alerting) using Terraform and Datadog.',
    ],
    techStack: [
      'Spring Webflux',
      'Java',
      'Vue.js',
      'GraphQL',
      'Github Actions',
      'GKE',
      'Storybook',
      'Terraform',
      'PostgreSQL',
      'Kafka',
      'MongoDB',
    ],
  },
  {
    name: 'ADEO',
    projectName: 'Tempo Selling front',
    position: 'Fullstack Developer',
    url: 'https://www.leroymerlin.fr/checkout/cart',
    startDate: '2020-02-01',
    endDate: '2022-11-30',
    summary: `Creation of an international marketplace platform for multiple Leroy Merlin sites (France, Spain, Italy and Portugal) and in particular the front of the checkout funnel (Cart, Delivery, Payment) as well as an omnichannel checkout funnel for in-store sales people. Additionally, adding a micro front fragment for mini cart in the header of the site and an API for add to cart operations.`,
    highlights: [
      'Made multiple contributions to the ADEO Design System.',
      'Proposed business solutions for multiple features.',
      'Improved the accessibility of the application.',
      'Created a frontend component library.',
      'Developed an omnichannel checkout funnel.',
    ],
    techStack: [
      'Java',
      'VueJs',
      'Micro Frontend',
      'Freemarker',
      'GraphQL',
      'Github Actions',
      'GKE',
      'Storybook',
      'Terraform',
      'Design System',
      'Storyshot',
      'Google Analytics',
    ],
  },
  {
    name: 'LeroyMerlin',
    projectName: "Log'Inventaire",
    position: 'Fullstack Developer',
    url: 'https://www.leroymerlin.fr/',
    startDate: '2019-01-01',
    endDate: '2020-01-30',
    summary: `Application for annual inventory management for LeroyMerlin stores using the storage management system used in-store. The application is also used for monitoring and dashboarding of all the data related to the inventory by the store managers and the audit team.`,
    highlights: [
      'Working on site during inventories to ensure the availability of the application.',
      'Direct contact with business managers and final users.',
      'Designing the front-end interface.',
      'Business and technical adaptation for a Poland launch.',
    ],
    techStack: [
      'Spring Webflux',
      'Angular 8',
      'Spring Batch',
      'PostgreSQL',
      'Gitlab',
      'Jenkins',
      'Gitlab CI',
      'Docker',
      'OpenShift',
      'Kafka',
    ],
  },
  {
    name: 'Digitaleaf',
    projectName: 'Web, loT and embedded systems',
    position: 'Mobile and IoT Developer',
    url: 'https://digitaleaf.com',
    startDate: '2018-05-01',
    endDate: '2018-11-30',
    summary: `Build and maintenance of various innovative projects in the medical field, disaster prevention and elderly support such as:
      Disaster prevention by image processing to detect: wild fires, floods, earthquakes
      Eye tracking interface that can be used as an input device for the elderly
      Eye tracking application for medical/surgery education
      Web app for company management`,
    highlights: [
      'Setting up automated testing.',
      'Run and maintain the above projects.',
      'Configure embedded systems.',
    ],
    techStack: ['PHP7', 'C#', 'Javascript', 'iOS', 'Shell Programming', 'CSS'],
  },
  {
    name: 'Agrisud International',
    projectName: 'Agrised',
    position: 'Mobile Developer',
    url: 'https://www.agrisud.org/',
    startDate: '2018-02-01',
    endDate: '2018-09-30',
    summary: `Mobile application for dematerialized monitoring/evaluation of family businesses in the agricultural sector for the beneficiaries of the Agrisud non-profit organization. The goal of the organization is to promote small agricultural enterprises that ensure food security and create wealth locally.`,
    highlights: [
      'Using a local store for offline state management.',
      'Configuration and setup for an Ionic mobile project.',
      'Role-based access control for two roles: beneficiary and organization member.',
    ],
    techStack: [
      'Spring Boot',
      'JHipster',
      'Angular',
      'IONIC',
      'HTML',
      'CSS',
      'Cordova',
      'REST',
    ],
  },
  {
    name: 'MH Partners',
    projectName: 'SeeTalk',
    position: 'Mobile Developer',
    url: 'https://www.agrisud.org/',
    startDate: '2017-08-01',
    endDate: '2017-09-30',
    summary: `Creation and deployment of a video recruitment platform: Candidate CVs and recruiter offers are in video format with candidate profile management and instant messaging.`,
    highlights: [
      'Mockups design',
      'Data structure design',
      'Full stack development (frontend, backend deployment)',
      'Development of a responsive front-end in Angular',
      'Creating the CI using Jenkins',
    ],
    techStack: [
      'Spring Boot',
      'Angular',
      'HTML',
      'CSS',
      'AWS',
      'Git',
      'Scrum',
      'Jenkins',
    ],
  },
];
