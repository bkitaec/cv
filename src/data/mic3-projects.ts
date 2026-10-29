export interface MIC3Project {
  id: string
  name: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  link?: string
  aiPowered?: boolean
  aiPercentage?: number
}

export const mic3Projects: MIC3Project[] = [
  {
    id: 'platform-v1',
    name: 'Affectli Platform',
    period: '2018 - Present',
    description:
      'Ontology-based "Business Operating System" that unifies legacy systems, IoT devices and data streams into a real-time single pane of glass. Used in oil & gas, telecom, mining, utilities and security operations.',
    highlights: [
      'Architected Form Builder with 50+ field types and drag-and-drop',
      'Built GraphQL architecture: 350+ operations with Apollo Client',
      'Implemented BPMN Process Designer for workflow automation',
      'Integrated Bryntum Grid/Gantt for task management and dashboards',
      'Real-time messaging & broadcasts via Rocket.Chat API & WebSockets',
      'GIS maps, heat maps and custom layers: OpenLayers + Cesium 3D',
      'Multi-tenant teams, workspaces and granular permissions UI',
      'Performance optimization: Rspack bundler, code splitting',
    ],
    tech: [
      'React',
      'Redux',
      'GraphQL',
      'Apollo Client',
      'BPMN.js',
      'Bryntum',
      'WebSocket',
      'OpenLayers',
    ],
    link: 'https://affectli.com',
  },
  {
    id: 'comply-respond',
    name: 'ComplyRespond.ai (Mi-Comply)',
    period: '2024 - Present',
    description:
      'Intelligent GRC platform that collects cyber data, maps it to compliance frameworks and tells teams what to fix first. Built from scratch on top of Affectli, now in its second major version.',
    aiPowered: true,
    aiPercentage: 95,
    highlights: [
      '~95% of the v1 codebase built using Claude AI',
      'Shipped v2: Brain knowledge base, Risk Surfaces, Compliance & Reporting workspaces',
      'AI Guidance & Priorities: remediation ranked by criticality',
      'Multi-tenant, white-labeled architecture with URL-based tenant detection',
      'Dynamic Form Builder for third-party risk questionnaires',
      'Role-based access control, SSO and protected routes',
      'Comprehensive Playwright E2E testing suite',
      'TypeScript strict mode with zero any types',
    ],
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Ant Design',
      'Zustand',
      'TanStack Router',
      'Playwright',
      'Claude AI',
    ],
    link: 'https://complyrespond.ai',
  },
]
