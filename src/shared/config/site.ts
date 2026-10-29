export const siteConfig = {
  name: 'Denys Bogdanov',
  title: 'Denys Bogdanov - Full Stack JavaScript Developer',
  description:
    'Full Stack JavaScript Developer with 16 years of experience. Frontend Team Lead at MI-C3 (Affectli, ComplyRespond.ai), Co-founder & CTO of Reservble.com. React, TypeScript, GraphQL, Node.js and AI-assisted development with Claude.',
  url: 'https://bkitaec.github.io/cv',
  links: {
    email: 'pranaboy13@gmail.com',
    linkedin: 'https://linkedin.com/in/bkitaec',
    github: 'https://github.com/bkitaec',
  },
  navigation: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
} as const

export type SiteConfig = typeof siteConfig
