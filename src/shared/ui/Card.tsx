'use client'

import { motion } from 'framer-motion'
import { cn, fadeInUp } from '@/shared/lib'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
