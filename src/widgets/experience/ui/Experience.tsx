'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experiences } from '@/data'
import { fadeInUp } from '@/shared/lib'
import { Container, Section, SectionTitle } from '@/shared/ui'

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle subtitle="My professional journey">
          Work Experience
        </SectionTitle>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-violet-500/50 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className={`relative md:w-1/2 ${
                  index % 2 === 0
                    ? 'md:pr-12'
                    : 'md:ml-auto md:pl-12'
                }`}
              >
                <div className="absolute left-0 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-violet-500 bg-white dark:bg-gray-950 md:left-auto md:block md:translate-x-0 md:right-0 md:translate-x-1/2">
                  {index % 2 !== 0 && (
                    <div className="absolute right-full top-1/2 h-px w-12 -translate-y-1/2 bg-violet-500/50" />
                  )}
                </div>
                {index % 2 === 0 && (
                  <div className="absolute -right-2 top-0 hidden h-4 w-4 translate-x-1/2 rounded-full border-4 border-violet-500 bg-white dark:bg-gray-950 md:block">
                    <div className="absolute left-full top-1/2 h-px w-12 -translate-y-1/2 bg-violet-500/50" />
                  </div>
                )}

                <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    {exp.current && (
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Current
                      </span>
                    )}
                    <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-700 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    {exp.description}
                  </p>

                  <div className="mt-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-400">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
