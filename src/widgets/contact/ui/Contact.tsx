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
    <Section id="contact" className="bg-gradient-to-br from-violet-600 to-violet-800">
      <Container>
        <SectionTitle subtitle="Let's work together" light>Get In Touch</SectionTitle>

        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm md:p-12"
          >
            <div className="text-center">
              <p className="text-lg text-white/90">
                I&apos;m currently open to new opportunities and interesting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
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
                  className="group flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-4 transition-all hover:bg-white/20"
                >
                  <link.icon className="h-6 w-6 text-white transition-colors" />
                  <span className="mt-2 text-sm font-medium text-white">
                    {link.name}
                  </span>
                  <span className="mt-1 text-xs text-white/70">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                href={`mailto:${personal.email}`}
                size="lg"
                className="gap-2 bg-white text-violet-700 hover:bg-white/90"
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
