'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Folder, Rocket } from 'lucide-react'
import { projects } from '@/data'
import { fadeInUp } from '@/shared/lib'
import { Container, Section, SectionTitle, Card, GlowingOrb, Sparkle } from '@/shared/ui'

export function Projects() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      {/* Background decorations */}
      <GlowingOrb className="absolute -left-60 top-1/4 h-96 w-96 opacity-20" color="purple" />
      <GlowingOrb className="absolute -right-60 bottom-1/4 h-80 w-80 opacity-15" />

      <Container className="relative">
        <SectionTitle subtitle="Featured work and side projects">
          Projects
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={project.id} className="group relative flex flex-col overflow-hidden">
              {/* Animated sparkle on hover */}
              <Sparkle
                className="absolute -right-2 -top-2 h-6 w-6 text-violet-400 opacity-0 transition-opacity group-hover:opacity-100"
                delay={index * 0.2}
              />

              <div className="mb-4 flex items-center justify-between">
                <motion.div
                  className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/30 dark:to-violet-800/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Folder className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-violet-500/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                </motion.div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg p-2 text-gray-600 transition-colors hover:bg-violet-100 hover:text-violet-600 dark:text-gray-400 dark:hover:bg-violet-900/30 dark:hover:text-violet-400"
                    aria-label={`Visit ${project.title}`}
                    whileHover={{ x: 3 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                    <Rocket className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.a>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-violet-600 dark:text-violet-400">
                {project.role}
              </p>

              <p className="mt-3 flex-grow text-gray-700 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-4">
                <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Highlights
                </h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-400">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-300 pt-4 dark:border-gray-800">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
