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
    tech: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Payments', 'Google Actions'],
    highlights: [
      'Built entire platform architecture from scratch',
      'Implemented secure payment processing',
      'Integrated Google Actions for voice bookings',
      'Designed scalable database architecture',
      'Achieved high platform reliability',
    ],
    link: 'https://reservble.com',
  },
  {
    id: 'affectli',
    title: 'Affectli D&D Form Builder',
    description:
      'Enterprise drag-and-drop form builder for B2B project at MI-C3. Allows users to create complex forms with full customization.',
    role: 'Lead Developer',
    tech: ['React', 'Redux', 'GraphQL',  'Flowable', 'bpmn.io', 'Bryntum', 'D&D API'],
    highlights: [
      'Developed from scratch as main developer',
      'Implemented complex drag & drop functionality',
      'Built reusable form components library',
      'Integrated with enterprise backend systems',
    ],
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
