'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useRef } from 'react'
import { personal } from '@/data'
import { fadeInUp, staggerContainer } from '@/shared/lib'
import { Container, Button, AnimatedText, ParticlesBackground, OrbitRing, ShootingStar, GlowingOrb } from '@/shared/ui'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Sun glow intensity based on scroll
  const sunScale = useTransform(scrollYProgress, [0, 0.5], [1, 2.5])
  const sunOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.3, 0.8, 1])
  const sunBlur = useTransform(scrollYProgress, [0, 0.5], [20, 80])
  const rayOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <ParticlesBackground />

      {/* Rising Sun effect - appears on scroll */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ scale: sunScale }}
      >
        {/* Sun core glow */}
        <motion.div
          className="h-64 w-64 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500"
          style={{
            opacity: sunOpacity,
            filter: useTransform(sunBlur, (v) => `blur(${v}px)`),
          }}
        />
        {/* Sun rays */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            opacity: rayOpacity,
            background: 'radial-gradient(circle, rgba(255,200,100,0.4) 0%, rgba(255,150,50,0.2) 40%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </motion.div>

      {/* Shooting stars */}
      <ShootingStar className="left-1/4 top-1/4 w-32" />
      <ShootingStar className="right-1/3 top-1/3 w-24 delay-1000" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-950/50 via-transparent to-transparent" />

      {/* Glowing orbs */}
      <GlowingOrb className="-left-40 top-20 h-80 w-80" />
      <GlowingOrb className="-right-40 bottom-20 h-80 w-80" color="purple" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Avatar with orbit rings */}
          <motion.div
            variants={fadeInUp}
            className="relative mb-6 flex items-center justify-center"
          >
            {/* Orbits centered around avatar */}
            <OrbitRing className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2" />
            <OrbitRing className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2" />

            {/* Avatar with scroll-based glow */}
            <motion.div
              className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-4xl font-bold text-white shadow-lg"
              style={{
                boxShadow: useTransform(
                  scrollYProgress,
                  [0, 0.3],
                  ['0 10px 40px -10px rgba(139, 92, 246, 0.3)', '0 10px 60px -10px rgba(255, 180, 100, 0.5)']
                ),
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
              DB
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <AnimatedText
              text={personal.name}
              as="h1"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-xl font-medium text-violet-400 sm:text-2xl"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-lg text-gray-300"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#experience" size="lg">
              View Experience
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16"
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-sm text-gray-400 transition-colors hover:text-violet-400"
            >
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
