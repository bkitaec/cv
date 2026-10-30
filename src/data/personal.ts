export const personal = {
  name: 'Denys Bogdanov',
  title: 'Full-Stack JavaScript Developer & Technical Leader',
  tagline: 'AI-powered development. 16 years of crafting web experiences.',
  location: 'Ukraine (Remote)',
  bio: `I've spent 16 years building software and helping teams do the same. Currently wearing two hats: Frontend Team Lead at MI-C3 International and Technical Co-founder at Reservble.com — a reservation platform I've built from scratch.

What drives me? The endless curiosity to learn. I leverage AI tools like Claude to accelerate development while maintaining high code quality. ComplyRespond.ai, the compliance product I build on the frontend, was written ~95% with Claude Code — proof that human-AI collaboration delivers production-ready solutions.`,
  extendedBio: `At MI-C3, I lead the frontend of Affectli — an ontology-based "Business Operating System" used in oil & gas, telecom, mining and security operations — and I'm its top frontend contributor. I built the platform's Form, BPMN Process and Data Pipeline designers, its Keycloak security console, and delivered products on top of it: ComplyRespond.ai and a telco incident management system for Telkom with digital twins and LLM agents.

I embrace modern development practices: AI-assisted coding with Claude Code, comprehensive testing with Playwright, and owning products end to end.`,
  email: 'pranaboy13@gmail.com',
  linkedin: 'https://linkedin.com/in/bkitaec',
  github: 'https://github.com/bkitaec',
  highlights: [
    '16 years crafting web experiences',
    'Leading teams & mentoring developers',
    'AI-powered development pioneer',
    'From idea to production — full cycle',
  ],
  education: {
    school: 'National University of Tax Services of Ukraine',
    degree: "Master's degree, Intelligent Decision-Making Systems",
    period: '2006 - 2012',
  },
  languages: [
    { name: 'English', level: 'Full professional' },
    { name: 'Ukrainian', level: 'Native' },
    { name: 'Russian', level: 'Native' },
  ],
  philosophy: 'Always learning. Always building. AI is my co-pilot.',
  aiStatement: 'Professional AI-assisted developer. ~95% of ComplyRespond.ai was built with Claude.',
} as const

export type Personal = typeof personal
