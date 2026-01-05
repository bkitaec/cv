export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: 'full-time' | 'self-employed' | 'contract' | 'outsource'
  description: string
  achievements: string[]
  skills: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    id: 'mi-c3-lead',
    company: 'MI-C3 International Ltd',
    role: 'Team Lead Front End',
    period: 'Feb 2020 - Present',
    location: 'Malta (Remote)',
    type: 'full-time',
    current: true,
    description:
      'Leading front-end development team, conducting code reviews, ensuring adherence to company standards, and mentoring newcomers.',
    achievements: [
      'Lead a team of front-end developers',
      'Conduct code reviews and maintain coding standards',
      'Participate in architectural decisions for new features',
      'Mentor junior developers and help them integrate into the team',
      'Work on core components and critical features',
    ],
    skills: ['React', 'TypeScript', 'Code Review', 'Team Leadership', 'Git'],
  },
  {
    id: 'reservble',
    company: 'Reservble',
    role: 'Technical CTO / Full Stack Developer',
    period: 'Mar 2019 - Present',
    location: 'Ukraine (Remote)',
    type: 'self-employed',
    current: true,
    description:
      'Co-founder and Technical CTO responsible for system architecture, API design, and end-to-end product delivery.',
    achievements: [
      'Designed and built the entire platform architecture',
      'Implemented payment integrations and booking system',
      'Developed REST APIs and database optimization',
      'Ensured platform reliability, performance, and scalability',
      'Integrated Google Actions for voice-enabled bookings',
    ],
    skills: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis',
      'Payments',
    ],
  },
  {
    id: 'mi-c3-dev',
    company: 'MI-C3 International Ltd',
    role: 'Front End / React Developer',
    period: 'Feb 2018 - Jan 2020',
    location: 'Malta, Birkirkara (Office)',
    type: 'full-time',
    description:
      'Front-end development for B2B project "Affectli". Main developer of drag and drop panel with full D&D Form Builder functionality.',
    achievements: [
      'Built drag & drop form builder from scratch',
      'Developed core UI components',
      'Implemented new features and bug fixes',
      'Worked with complex data visualizations',
    ],
    skills: ['React', 'Redux', 'JavaScript', 'Git', 'GitLab'],
  },
  {
    id: 'wanderbeat',
    company: 'Wanderbeat.audio',
    role: 'JavaScript Developer',
    period: 'Sep 2016 - Jul 2018',
    location: 'Remote',
    type: 'full-time',
    description:
      'Full-stack development with React + Redux frontend and Express.js backend with PostgreSQL database.',
    achievements: [
      'Built UI with React + Redux using ES6+',
      'Developed API with Express.js and Sequelize ORM',
      'Created admin panel with AngularJS',
      'Implemented authentication with Passport.js',
      'Wrote tests with Mocha',
    ],
    skills: ['React', 'Redux', 'Express.js', 'PostgreSQL', 'Sequelize', 'Mocha'],
  },
  {
    id: 'codenetix',
    company: 'Codenetix',
    role: 'Frontend Developer',
    period: 'May 2017 - Dec 2017',
    location: 'OutSource',
    type: 'outsource',
    description:
      'Frontend development for various projects including CMS theming and React applications.',
    achievements: [
      'CMS theming for WordPress, Prestashop, Drupal',
      'React + Redux frontend development',
      'AngularJS + Google Maps API integrations',
    ],
    skills: ['React', 'Redux', 'AngularJS', 'WordPress', 'Google Maps API'],
  },
  {
    id: 'ekatong',
    company: 'e卡通',
    role: 'WEB Engineer',
    period: 'Feb 2016 - Sep 2016',
    location: 'On-site',
    type: 'full-time',
    description:
      'Full-stack development including WordPress, mobile apps with Ionic, and admin panels.',
    achievements: [
      'Built mobile app with Ionic + AngularJS',
      'Created admin panel with Sails.js + Node.js',
      'Designed MySQL database with connections and dependencies',
      'Developed WiFi door access system',
    ],
    skills: ['AngularJS', 'Ionic', 'Node.js', 'Sails.js', 'MySQL', 'WordPress'],
  },
]
