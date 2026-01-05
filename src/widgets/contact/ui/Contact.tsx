'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react'
import { personal } from '@/data'
import { fadeInUp } from '@/shared/lib'
import { Container, Section, SectionTitle, Button } from '@/shared/ui'

const contactLinks = [
  {
    name: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/bkitaec',
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    value: 'github.com/bkitaec',
    href: personal.github,
    icon: Github,
  },
]

export function Contact() {
  return (
    <Section id="contact" className="bg-gray-50/50 dark:bg-gray-900/50">
      <Container>
        <SectionTitle subtitle="Let's work together">Get In Touch</SectionTitle>

        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-12"
          >
            <div className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I&apos;m currently open to new opportunities and interesting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>{personal.location}</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={
                    link.href.startsWith('mailto')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="group flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all hover:border-violet-500 hover:bg-violet-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-violet-400 dark:hover:bg-violet-900/20"
                >
                  <link.icon className="h-6 w-6 text-gray-500 transition-colors group-hover:text-violet-600 dark:text-gray-400 dark:group-hover:text-violet-400" />
                  <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    {link.name}
                  </span>
                  <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                href={`mailto:${personal.email}`}
                size="lg"
                className="gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
