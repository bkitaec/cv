'use client'

import { motion } from 'framer-motion'
import { cn, fadeInUp } from '@/shared/lib'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className, hover = true, glass = false }: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'rounded-xl p-6',
        glass
          ? 'border border-white/20 bg-white/10 backdrop-blur-sm'
          : 'border border-gray-300 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
