'use client'

import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'
import { Sparkle } from './AstroDecorations'

interface AIBadgeProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function AIBadge({ className = '', size = 'md' }: AIBadgeProps) {
  const sizes = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-sm gap-1.5',
    lg: 'px-4 py-1.5 text-base gap-2',
  }

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  return (
    <motion.div
      className={`relative inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 font-medium text-white shadow-lg shadow-violet-500/30 ${sizes[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 blur-md"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Content */}
      <span className="relative flex items-center gap-1.5">
        <Bot className={iconSizes[size]} />
        <span>AI-Powered Developer</span>
        <Sparkle className={`${iconSizes[size]} text-white`} delay={0} />
      </span>
    </motion.div>
  )
}
