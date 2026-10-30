export interface Project {
  id: string
  title: string
  description: string
  role: string
  tech: string[]
  highlights: string[]
  link?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 'reservble',
    title: 'Reservble.com',
    description:
      'Restaurant booking platform that enables customers to make reservations online and helps restaurants manage their bookings efficiently.',
    role: 'Technical CTO & Co-founder',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Payments', 'Syrve', 'Claude AI'],
    highlights: [
      'Built entire platform architecture from scratch',
      'Implemented secure payment processing',
      'Integrated Syrve POS and Places API',
      'AI operations agent for diagnostics and configuration',
      'Designed scalable database architecture',
      'Achieved high platform reliability',
    ],
    link: 'https://reservble.com',
  },
  {
    id: 'affectli',
    title: 'Affectli Platform Designers',
    description:
      'No-code tooling inside the Affectli enterprise platform: users design forms, business processes and data pipelines visually and run them in production.',
    role: 'Lead Frontend Developer',
    tech: ['React', 'Redux', 'GraphQL', 'bpmn-js', 'drawflow', 'Bryntum', 'Keycloak'],
    highlights: [
      'Form Designer with 46 field types, versioning and import/export',
      'BPMN Process Designer with scripts, listeners, gateways and versioning',
      'Data Pipeline Designer & Monitor with live status',
      'Security admin console on Keycloak',
    ],
    link: 'https://affectli.com',
  },
  {
    id: 'wanderbeat',
    title: 'Wanderbeat.audio',
    description:
      'Audio streaming platform with React frontend and Node.js backend, featuring admin panel and user management.',
    role: 'Full Stack Developer',
    tech: ['React', 'Redux', 'Express.js', 'PostgreSQL', 'AngularJS'],
    highlights: [
      'Built full-stack application',
      'Implemented authentication system with Passport.js',
      'Created admin panel with AngularJS',
      'Wrote comprehensive test coverage with Mocha',
    ],
  },
]
