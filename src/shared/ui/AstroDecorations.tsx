'use client'

import { motion } from 'framer-motion'

// Orbit ring decoration
export function OrbitRing({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      className={`pointer-events-none absolute rounded-full border border-violet-500/20 ${className}`}
    >
      <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400/60" />
    </motion.div>
  )
}

// Star burst decoration for titles
export function StarBurst({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      fill="none"
    >
      <motion.path
        d="M50 0 L52 45 L100 50 L52 55 L50 100 L48 55 L0 50 L48 45 Z"
        fill="currentColor"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

// Constellation dots pattern
export function ConstellationDots({ className = '' }: { className?: string }) {
  const dots = [
    { x: 10, y: 20, size: 2, delay: 0 },
    { x: 30, y: 10, size: 3, delay: 0.5 },
    { x: 50, y: 30, size: 2, delay: 1 },
    { x: 70, y: 15, size: 2.5, delay: 0.3 },
    { x: 90, y: 25, size: 2, delay: 0.8 },
  ]

  const lines = [
    { x1: 10, y1: 20, x2: 30, y2: 10 },
    { x1: 30, y1: 10, x2: 50, y2: 30 },
    { x1: 50, y1: 30, x2: 70, y2: 15 },
    { x1: 70, y1: 15, x2: 90, y2: 25 },
  ]

  return (
    <svg viewBox="0 0 100 40" className={`pointer-events-none ${className}`}>
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
        />
      ))}
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={dot.size}
          fill="currentColor"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, delay: dot.delay, repeat: Infinity }}
        />
      ))}
    </svg>
  )
}

// Glowing orb for backgrounds
export function GlowingOrb({ className = '', color = 'violet' }: { className?: string; color?: string }) {
  const colorClasses = {
    violet: 'bg-violet-500/30',
    blue: 'bg-blue-500/30',
    purple: 'bg-purple-500/30',
  }

  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${colorClasses[color as keyof typeof colorClasses] || colorClasses.violet} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// Hexagon grid pattern
export function HexagonPattern({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none ${className}`}>
      <defs>
        <pattern id="hexagons" width="28" height="49" patternUnits="userSpaceOnUse">
          <motion.path
            d="M14 0 L28 12.5 L28 36.5 L14 49 L0 36.5 L0 12.5 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#hexagons)" />
    </svg>
  )
}

// Shooting star animation
export function ShootingStar({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none absolute h-px bg-gradient-to-r from-transparent via-white to-transparent ${className}`}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '200%', opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
    />
  )
}

// Planet ring decoration
export function PlanetRing({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-violet-600" />
      <motion.div
        className="absolute inset-[-20%] rounded-full border-2 border-violet-300/40"
        style={{ transform: 'rotateX(70deg)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

// Nebula cloud effect
export function NebulaCloud({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`}>
      <motion.div
        className="absolute h-full w-full rounded-full bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-0 h-3/4 w-3/4 rounded-full bg-gradient-to-tl from-blue-600/20 via-violet-500/10 to-transparent blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

// Sparkle effect
export function Sparkle({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={`pointer-events-none ${className}`}
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: 3 }}
    >
      <path
        d="M12 0L13.5 9L24 12L13.5 15L12 24L10.5 15L0 12L10.5 9Z"
        fill="currentColor"
      />
    </motion.svg>
  )
}
