'use client'

import { motion } from 'framer-motion'
import { Building2, Bot, Cpu, Workflow, Database, MessageSquare, Layers, TestTube, Sparkles } from 'lucide-react'
import { mic3Projects } from '@/data'
import { fadeInUp } from '@/shared/lib'
import { Container, Section, SectionTitle, OrbitRing, GlowingOrb, Sparkle } from '@/shared/ui'

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  React: Layers,
  GraphQL: Database,
  'Apollo Client': Database,
  'BPMN.js': Workflow,
  Bryntum: Layers,
  WebSocket: MessageSquare,
  'Claude AI': Bot,
  Playwright: TestTube,
  TypeScript: Cpu,
}

export function MIC3Spotlight() {
  return (
    <Section id="mic3" className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-800 to-violet-900">
      {/* Background decorations */}
      <OrbitRing className="absolute -left-32 top-1/4 h-64 w-64 border-white/10" />
      <OrbitRing className="absolute -right-32 bottom-1/4 h-48 w-48 border-white/10" />
      <GlowingOrb className="absolute left-1/4 top-1/2 h-40 w-40 -translate-y-1/2 opacity-20" color="purple" />

      <Container className="relative">
        <SectionTitle subtitle="6 years of building enterprise solutions" light>
          MI-C3 Spotlight
        </SectionTitle>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mb-12 max-w-3xl text-center text-lg text-white/80"
        >
          From developer to team lead, building enterprise-grade solutions. Two flagship projects
          showcase my technical evolution and embrace of modern development practices including
          AI-assisted development.
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-2">
          {mic3Projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15 hover:shadow-lg hover:shadow-violet-500/20 md:p-8">
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"
                />

                {/* AI Badge for Mi-Comply */}
                {project.aiPowered && (
                  <motion.div
                    className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-1 text-xs font-bold text-white shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Bot className="h-3.5 w-3.5" />
                    <span>{project.aiPercentage}% AI-Powered</span>
                    <Sparkle className="h-3 w-3 text-white" delay={0.5} />
                  </motion.div>
                )}

                {/* Header */}
                <div className="mb-6 flex items-start gap-4">
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.aiPowered ? (
                      <Bot className="h-7 w-7 text-white" />
                    ) : (
                      <Building2 className="h-7 w-7 text-white" />
                    )}
                  </motion.div>
                  <div className="flex-1 pr-20">
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">{project.period}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-white/80">{project.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/60">
                    <Sparkles className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-white/90"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-300" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => {
                    const Icon = techIcons[tech]
                    return (
                      <motion.span
                        key={tech}
                        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      >
                        {Icon && <Icon className="h-3 w-3" />}
                        {tech}
                      </motion.span>
                    )
                  })}
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-px -right-px h-16 w-16 overflow-hidden">
                  <div className="absolute bottom-0 right-0 h-8 w-8 origin-bottom-right rotate-45 transform bg-gradient-to-r from-violet-400 to-violet-500 opacity-0 transition-opacity group-hover:opacity-50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Development Statement */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mt-12 max-w-2xl rounded-xl border border-white/30 bg-white/20 p-6 text-center backdrop-blur-sm"
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <Bot className="h-5 w-5 text-white" />
            <h4 className="font-semibold text-white">AI-Assisted Development Philosophy</h4>
          </div>
          <p className="text-white/80">
            I leverage AI tools like Claude to accelerate development while maintaining high code quality.
            Mi-Comply demonstrates that AI-human collaboration can deliver production-ready enterprise
            solutions efficiently. The future of development is augmented by AI.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
