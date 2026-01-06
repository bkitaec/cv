export const personal = {
  name: 'Denys Bogdanov',
  title: 'Full-Stack JavaScript Developer & Technical Leader',
  tagline: 'AI-powered development. 16 years of crafting web experiences.',
  location: 'Ukraine (Remote)',
  bio: `I've spent 16 years building software and helping teams do the same. Currently wearing two hats: Frontend Team Lead at MI-C3 International and Technical Co-founder at Reservble.com — a reservation platform I've built from scratch.

What drives me? The endless curiosity to learn. I leverage AI tools like Claude to accelerate development while maintaining high code quality. My latest enterprise project was 95% built using AI assistance — proving that human-AI collaboration delivers production-ready solutions.`,
  extendedBio: `At MI-C3, I lead the frontend team on "Affectli" — a large-scale B2B enterprise platform. My proudest achievements include architecting a drag-and-drop Form Builder with 50+ field types, building GraphQL architecture with 350+ operations, and implementing BPMN Process Designer.

I embrace modern development practices: AI-assisted coding, comprehensive testing with Playwright, and staying ahead of emerging technologies. The future of development is augmented by AI — and I'm ready for it.`,
  email: 'pranaboy13@gmail.com',
  linkedin: 'https://linkedin.com/in/bkitaec',
  github: 'https://github.com/bkitaec',
  highlights: [
    '16 years crafting web experiences',
    'Leading teams & mentoring developers',
    'AI-powered development pioneer',
    'From idea to production — full cycle',
  ],
  philosophy: 'Always learning. Always building. AI is my co-pilot.',
  aiStatement: 'Professional AI-assisted developer. 95% of my latest project was built with Claude.',
} as const

export type Personal = typeof personal
