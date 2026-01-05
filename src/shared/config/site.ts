export const siteConfig = {
  name: 'Denys Bogdanov',
  title: 'Denys Bogdanov - Full Stack JavaScript Developer',
  description:
    'Full Stack JavaScript Developer with 8+ years of experience. Team Lead at MI-C3, Co-founder of Reservble.com. Specializing in React, Node.js, and scalable web applications.',
  url: 'https://denys-bogdanov.dev',
  ogImage: '/og-image.png',
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
