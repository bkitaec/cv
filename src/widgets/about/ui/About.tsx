'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Quote, Sparkles, Telescope, Bot } from 'lucide-react'
import { personal } from '@/data'
import { fadeInUp } from '@/shared/lib'
import { Container, Section, SectionTitle, ConstellationDots, PlanetRing, Sparkle } from '@/shared/ui'

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-violet-800">
      {/* Floating decorations */}
      <ConstellationDots className="absolute left-10 top-20 h-16 w-32 text-white/20" />
      <ConstellationDots className="absolute bottom-32 right-10 h-16 w-32 rotate-180 text-white/20" />

      {/* Planet decoration */}
      <motion.div
        className="absolute -right-20 top-40 hidden opacity-20 md:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <PlanetRing className="h-32 w-32" />
      </motion.div>

      <Container className="relative">
        <SectionTitle subtitle="Get to know me better" light>About Me</SectionTitle>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg leading-relaxed text-white/90">
              {personal.bio.split('\n\n')[0]}
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              {personal.bio.split('\n\n')[1]}
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              {personal.extendedBio.split('\n\n')[0]}
            </p>

            {/* Quote with glow effect */}
            <motion.div
              variants={fadeInUp}
              className="group relative mt-8 overflow-hidden rounded-xl border border-white/30 bg-white/20 p-4 backdrop-blur-sm"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              <div className="relative flex items-center gap-4">
                <Quote className="h-8 w-8 flex-shrink-0 text-white/80" />
                <p className="text-lg font-medium italic text-white">
                  {personal.philosophy}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {/* What I Bring card */}
            <div className="group relative rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15">
              <Sparkle className="absolute -right-2 -top-2 h-5 w-5 text-white/60" delay={0} />

              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-white/80" />
                <h3 className="text-lg font-semibold text-white">
                  What I Bring
                </h3>
              </div>
              <ul className="space-y-3">
                {personal.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <span className="text-white/90">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* AI Development card */}
            <div className="group relative rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-6 backdrop-blur-sm transition-all hover:from-emerald-500/30 hover:to-cyan-500/30">
              <motion.div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-emerald-400/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <Sparkle className="absolute -right-2 -top-2 h-5 w-5 text-emerald-300" delay={0.5} />

              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-emerald-300" />
                  <h3 className="text-lg font-semibold text-white">
                    AI-Powered Development
                  </h3>
                </div>
                <p className="text-white/80">
                  {personal.aiStatement} I leverage AI tools to accelerate development while maintaining high code quality and best practices.
                </p>
              </div>
            </div>

            {/* Currently Exploring card */}
            <div className="group relative rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15">
              <motion.div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-white/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <Telescope className="h-5 w-5 text-white/80" />
                  <h3 className="text-lg font-semibold text-white">
                    Currently Exploring
                  </h3>
                </div>
                <p className="text-white/80">
                  Claude API integrations, AI agent development, modern DevOps practices, and ways to make development teams more effective through AI collaboration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
