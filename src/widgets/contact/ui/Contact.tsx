'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, Satellite } from 'lucide-react'
import { personal } from '@/data'
import { fadeInUp } from '@/shared/lib'
import { Container, Section, SectionTitle, Button, OrbitRing, StarBurst, Sparkle } from '@/shared/ui'

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
    <Section id="contact" className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-violet-800">
      {/* Decorative orbits */}
      <OrbitRing className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 border-white/10" />
      <OrbitRing className="absolute -right-40 top-1/3 h-60 w-60 border-white/10" />

      {/* Floating satellite decoration */}
      <motion.div
        className="absolute right-20 top-20 hidden text-white/20 md:block"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Satellite className="h-12 w-12" />
      </motion.div>

      <Container className="relative">
        <SectionTitle subtitle="Let's work together" light>Get In Touch</SectionTitle>

        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm md:p-12"
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"
              animate={{ scale: [1.3, 1, 1.3], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative text-center">
              <p className="text-lg text-white/90">
                I&apos;m currently open to new opportunities and interesting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <motion.div
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/80"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="h-4 w-4" />
                <span>{personal.location}</span>
              </motion.div>
            </div>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={
                    link.href.startsWith('mailto')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-white/20 bg-white/10 p-4 transition-all hover:bg-white/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 transition-opacity group-hover:opacity-100" />

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <link.icon className="relative h-6 w-6 text-white transition-colors" />
                  </motion.div>
                  <span className="relative mt-2 text-sm font-medium text-white">
                    {link.name}
                  </span>
                  <span className="relative mt-1 text-xs text-white/70">
                    {link.value}
                  </span>

                  {/* Corner sparkle */}
                  <Sparkle
                    className="absolute -right-1 -top-1 h-4 w-4 text-white/60 opacity-0 transition-opacity group-hover:opacity-100"
                    delay={index * 0.3}
                  />
                </motion.a>
              ))}
            </div>

            <div className="relative mt-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href={`mailto:${personal.email}`}
                  size="lg"
                  className="group relative gap-2 overflow-hidden bg-white text-violet-700 hover:bg-white/90"
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-200/50 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <Send className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span className="relative">Send Message</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
