'use client'

import { motion } from 'framer-motion'
import { Monitor, Server, Wrench, Users, Bot, TestTube } from 'lucide-react'
import { skillCategories } from '@/data'
import { fadeInUp, cn } from '@/shared/lib'
import { Container, Section, SectionTitle, Card, HexagonPattern, OrbitRing } from '@/shared/ui'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Wrench,
  Users,
  Bot,
  TestTube,
}

const levelColors = {
  expert: 'bg-white',
  advanced: 'bg-white/80',
  intermediate: 'bg-white/60',
}

const levelWidth = {
  expert: 'w-full',
  advanced: 'w-4/5',
  intermediate: 'w-3/5',
}

export function Skills() {
  return (
    <Section id="skills" className="relative overflow-hidden bg-gradient-to-br from-violet-700 to-violet-900">
      {/* Hexagon pattern background */}
      <HexagonPattern className="absolute inset-0 h-full w-full text-white/5" />

      {/* Floating orbit decorations */}
      <OrbitRing className="absolute -left-20 top-1/4 h-40 w-40 border-white/10" />
      <OrbitRing className="absolute -right-20 bottom-1/4 h-60 w-60 border-white/10" />

      <Container className="relative">
        <SectionTitle subtitle="Technologies I work with" light>
          Skills & Expertise
        </SectionTitle>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon]
            return (
              <Card key={category.id} className="group relative overflow-hidden p-6" glass>
                {/* Animated corner accent */}
                <motion.div
                  className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-white/10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: catIndex * 0.5 }}
                />

                <div className="relative mb-4 flex items-center gap-3">
                  {Icon && (
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                  )}
                  <h3 className="text-lg font-semibold text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm font-medium text-white/90">
                          {skill.name}
                        </span>
                        <span className="text-xs capitalize text-white/70">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/20">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className={cn(
                            'h-full rounded-full',
                            levelColors[skill.level],
                            levelWidth[skill.level]
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
