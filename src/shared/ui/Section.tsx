'use client'

import { motion } from 'framer-motion'
import { cn, staggerContainer } from '@/shared/lib'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className={cn('py-16 md:py-24', className)}
    >
      {children}
    </motion.section>
  )
}
