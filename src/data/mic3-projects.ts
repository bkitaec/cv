export interface MIC3Project {
  id: string
  name: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  aiPowered?: boolean
  aiPercentage?: number
}

export const mic3Projects: MIC3Project[] = [
  {
    id: 'platform-v1',
    name: 'Platform V1 (Affectli)',
    period: '2018 - Present',
    description:
      'Enterprise B2B platform for process management, task automation, and data visualization. Built complex features from scratch working closely with backend team.',
    highlights: [
      'Architected Form Builder with 50+ field types and drag-and-drop',
      'Built GraphQL architecture: 350+ operations with Apollo Client',
      'Implemented BPMN Process Designer for visual workflow editing',
      'Integrated Bryntum Grid/Gantt for enterprise dashboards',
      'Real-time chat integration via Rocket.Chat API & WebSockets',
      'Geospatial features: OpenLayers + Cesium 3D mapping',
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
  },
  {
    id: 'mi-comply',
    name: 'Mi-Comply Frontend',
    period: '2024 - 2025',
    description:
      'Multi-tenant Third Party Risk Management (TPRM) platform. White-labeled Form-as-a-Service solution built from scratch.',
    aiPowered: true,
    aiPercentage: 95,
    highlights: [
      '95% of codebase built using Claude AI',
      'Multi-tenant architecture with URL-based tenant detection',
      'Dynamic Form Builder for TPRM questionnaires',
      'Role-based access control with protected routes',
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
  },
]
