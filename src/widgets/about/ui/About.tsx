'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { personal } from '@/data'
import { fadeInUp } from '@/shared/lib'
import { Container, Section, SectionTitle } from '@/shared/ui'

export function About() {
  return (
    <Section id="about" className="bg-gradient-to-br from-violet-600 to-violet-800">
      <Container>
        <SectionTitle subtitle="Get to know me better" light>About Me</SectionTitle>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg leading-relaxed text-white/90">
              {personal.bio.split('\n\n')[0]}
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              {personal.bio.split('\n\n')[1]}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Highlights
              </h3>
              <ul className="space-y-3">
                {personal.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <span className="text-white/90">
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
