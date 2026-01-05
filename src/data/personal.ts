export const personal = {
  name: 'Denys Bogdanov',
  title: 'Full Stack JavaScript Developer',
  tagline: 'Building scalable web applications with 8+ years of experience',
  location: 'Ukraine (Remote)',
  bio: `Through my 8 years' experience in JavaScript development, I have mastered the art of designing robust web applications. As a Team Lead at MI-C3 and Technical CTO at Reservble.com, I focus on clean architecture, code quality, and delivering exceptional user experiences.

I specialize in React ecosystem, Node.js backend development, and leading engineering teams to build enterprise-grade applications.`,
  email: 'pranaboy13@gmail.com',
  linkedin: 'https://linkedin.com/in/bkitaec',
  github: 'https://github.com/bkitaec',
  highlights: [
    '8+ years of JavaScript development',
    'Team Lead at MI-C3 International Ltd',
    'Technical CTO at Reservble.com',
    'Expert in React, Node.js, PostgreSQL',
  ],
} as const

export type Personal = typeof personal
