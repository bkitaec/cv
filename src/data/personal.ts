export const personal = {
  name: 'Denys Bogdanov',
  title: 'Full-Stack JavaScript Developer & Technical Leader',
  tagline: 'Building software and learning something new every day',
  location: 'Ukraine (Remote)',
  bio: `I've spent 16 years building software and helping teams do the same. Currently wearing two hats: Frontend Team Lead at MI-C3 International and Technical Co-founder at Reservble.com — a reservation platform I've built from scratch.

What drives me? The endless curiosity to learn. I dive deep into new AI technologies, explore every Claude feature, and stay on top of emerging trends. I believe the best developers never stop being students.`,
  extendedBio: `At MI-C3, I lead the frontend team on "Affectli" — a large-scale B2B enterprise platform. My proudest achievements include architecting a drag-and-drop Form Builder from scratch, establishing code review culture, and mentoring the next generation of developers.

When I'm not coding, I'm probably experimenting with the latest AI tools or reading about what's coming next in tech.`,
  email: 'pranaboy13@gmail.com',
  linkedin: 'https://linkedin.com/in/bkitaec',
  github: 'https://github.com/bkitaec',
  highlights: [
    '16 years crafting web experiences',
    'Leading teams & mentoring developers',
    'AI enthusiast & continuous learner',
    'From idea to production — full cycle',
  ],
  philosophy: 'Always learning. Always building. Always curious.',
} as const

export type Personal = typeof personal
