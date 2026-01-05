export const personal = {
  name: 'Denys Bogdanov',
  title: 'Full-Stack JavaScript Developer & Technical Leader',
  tagline: '16 years in web development, 10 years specializing in JavaScript ecosystems',
  location: 'Ukraine (Remote)',
  bio: `Full-Stack JavaScript Developer and Technical Leader with 16 years in web development and 10 years specializing in JavaScript ecosystems. Currently serving dual roles: Frontend Team Lead at MI-C3 International (8 years total, 6 as lead) and Technical Co-founder/CTO at Reservble.com — a reservation platform I've built and scaled from the ground up.

At MI-C3, I lead the frontend team on a large-scale B2B enterprise platform "Affectli". Key contributions include architecting a drag-and-drop Form Builder from scratch, establishing code review standards, mentoring developers, and driving technical discussions on new features.`,
  email: 'pranaboy13@gmail.com',
  linkedin: 'https://linkedin.com/in/bkitaec',
  github: 'https://github.com/bkitaec',
  highlights: [
    '16 years of web development experience',
    'Frontend Team Lead at MI-C3 (6 years leading)',
    'Technical Co-founder/CTO at Reservble.com',
    'Expert in JS/ES6, React, Node.js, PostgreSQL',
  ],
} as const

export type Personal = typeof personal
