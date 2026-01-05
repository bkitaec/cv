'use client'

import { motion } from 'framer-motion'
import { cn, fadeInUp } from '@/shared/lib'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
  light?: boolean
}

export function SectionTitle({ children, className, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div variants={fadeInUp} className={cn('mb-12 text-center', className)}>
      <h2 className={cn(
        'text-3xl font-bold tracking-tight sm:text-4xl',
        light ? 'text-white' : 'text-violet-400'
      )}>
        {children}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-lg',
          light ? 'text-white/80' : 'text-gray-400'
        )}>{subtitle}</p>
      )}
    </motion.div>
  )
}
