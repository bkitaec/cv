'use client'

import { motion } from 'framer-motion'
import { cn, fadeInUp } from '@/shared/lib'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
}

export function SectionTitle({ children, className, subtitle }: SectionTitleProps) {
  return (
    <motion.div variants={fadeInUp} className={cn('mb-12 text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </motion.div>
  )
}
