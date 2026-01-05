'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personal } from '@/data'
import { siteConfig } from '@/shared/config'
import { Container } from '@/shared/ui'

const socialLinks = [
  { name: 'GitHub', href: personal.github, icon: Github },
  { name: 'LinkedIn', href: personal.linkedin, icon: Linkedin },
  { name: 'Email', href: `mailto:${personal.email}`, icon: Mail },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-300 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-950">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a
              href="#"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              <span className="text-violet-600 dark:text-violet-400">D</span>B
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Full-Stack JavaScript Developer & Technical Leader
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-700 transition-colors hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={
                  link.href.startsWith('mailto')
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-violet-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-violet-400"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-gray-300 pt-8 dark:border-gray-800">
          <p className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-400">
            Built with <Heart className="h-4 w-4 text-red-500" /> using Next.js
            & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
