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
      'Leading the frontend of Affectli — an ontology-based enterprise platform for real-time operations — and delivering products and customer solutions on top of it: ComplyRespond.ai (risk & compliance) and a telco incident management system for Telkom. Top contributor to the Affectli frontend (~26% of the current codebase).',
    achievements: [
      'Lead the frontend team: code reviews, standards, mentoring; merged 3,500+ merge requests and managed 17 release branches',
      'Built the platform designers: no-code Form Designer, BPMN Process Designer and Data Pipeline Designer & Monitor',
      'Built the Keycloak security admin console: auth flows, identity/OpenID providers, tokens, OTP, brute-force protection',
      'Ontology & entity UI, relationship graphs, permissions and sharing, Bryntum grids and task boards, print templates',
      'Engineering health: removed Flow from 1,400+ files, dropped PrimeReact, moved builds to Rspack',
      'Main frontend developer of ComplyRespond.ai — ~95% of the code written with Claude Code',
      'Telkom: migrated the NOC UI to TypeScript, built digital twins, Command Centre and six LLM agents',
      'Migrated the platform E2E suite from Puppeteer to Playwright; maintain the shared component library',
    ],
    skills: ['React', 'TypeScript', 'GraphQL', 'Apollo Client', 'BPMN.js', 'Bryntum', 'Keycloak', 'Claude AI', 'Playwright', 'Team Leadership'],
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
      'Co-founder and Technical CTO. I own the technical strategy, system architecture, and end-to-end product delivery across frontend, backend, and core platform services.',
    achievements: [
      'Designed and built the entire platform architecture',
      'Implemented payment integrations and booking system',
      'Developed REST APIs and database optimization',
      'Ensured platform reliability, performance, and scalability',
      'Built POS integration with Syrve and venue data via Places API',
      'Built an AI operations agent for diagnostics, tenant configuration and approval-controlled changes',
      'Set up observability, incident response and secure release processes',
    ],
    skills: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis',
      'Payments',
      'Syrve',
      'Claude AI',
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
      'Frontend development for Affectli, MI-C3\'s enterprise B2B platform. Built foundational modules and the core UI component library.',
    achievements: [
      'Main developer of the no-code Form Designer, built from scratch with an extensible field architecture',
      'Developed core UI component library used across the platform',
      'Implemented real-time chat integration with Rocket.Chat API',
      'Created geospatial visualizations with OpenLayers and Cesium 3D',
      'Worked with complex data grids and chart visualizations',
    ],
    skills: ['React', 'Redux', 'Flow', 'JavaScript', 'OpenLayers', 'Cesium', 'Git', 'GitLab'],
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
  {
    id: 'newaion',
    company: 'Newaion',
    role: 'PHP Engineer',
    period: 'Aug 2010 - Nov 2015',
    location: 'Remote',
    type: 'contract',
    description:
      'Lead developer of the web platform for an online MMORPG (Aion) game server on the Kohana PHP framework — the entire CMS, frontend and backend.',
    achievements: [
      'Online store and donations with payment integrations (ROBOKASSA, Interkassa)',
      'Lottery, auction and vote rewards with external rating site integrations',
      'Admin statistics dashboards, game account management and server log processing',
    ],
    skills: ['PHP', 'Kohana', 'MySQL', 'JavaScript', 'Payments'],
  },
]
