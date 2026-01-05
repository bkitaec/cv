'use client'

import { motion } from 'framer-motion'
import { cn, fadeInUp } from '@/shared/lib'
import { StarBurst, Sparkle } from './AstroDecorations'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
  light?: boolean
}

export function SectionTitle({ children, className, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div variants={fadeInUp} className={cn('relative mb-12 text-center', className)}>
      {/* Decorative sparkles */}
      <Sparkle
        className={cn(
          'absolute -left-8 top-0 h-6 w-6',
          light ? 'text-white/60' : 'text-violet-400/60'
        )}
        delay={0}
      />
      <Sparkle
        className={cn(
          'absolute -right-8 top-4 h-4 w-4',
          light ? 'text-white/40' : 'text-violet-400/40'
        )}
        delay={1}
      />

      <div className="relative inline-block">
        {/* Star burst behind title */}
        <StarBurst
          className={cn(
            'absolute -left-6 top-1/2 h-8 w-8 -translate-y-1/2',
            light ? 'text-white/30' : 'text-violet-500/30'
          )}
        />
        <StarBurst
          className={cn(
            'absolute -right-6 top-1/2 h-8 w-8 -translate-y-1/2',
            light ? 'text-white/30' : 'text-violet-500/30'
          )}
        />

        <h2 className={cn(
          'relative text-3xl font-bold tracking-tight sm:text-4xl',
          light ? 'text-white' : 'text-violet-400'
        )}>
          {children}
        </h2>
      </div>

      {subtitle && (
        <p className={cn(
          'mt-4 text-lg',
          light ? 'text-white/80' : 'text-gray-400'
        )}>{subtitle}</p>
      )}

      {/* Decorative line */}
      <motion.div
        className={cn(
          'mx-auto mt-6 h-px w-24',
          light
            ? 'bg-gradient-to-r from-transparent via-white/50 to-transparent'
            : 'bg-gradient-to-r from-transparent via-violet-500/50 to-transparent'
        )}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  )
}
