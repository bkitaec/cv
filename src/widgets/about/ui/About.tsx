'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { personal } from '@/data'
import { fadeInUp } from '@/shared/lib'
import { Container, Section, SectionTitle } from '@/shared/ui'

export function About() {
  return (
    <Section id="about" className="bg-gray-50/50 dark:bg-gray-900/50">
      <Container>
        <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {personal.bio.split('\n\n')[0]}
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {personal.bio.split('\n\n')[1]}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Highlights
              </h3>
              <ul className="space-y-3">
                {personal.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600 dark:text-violet-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
