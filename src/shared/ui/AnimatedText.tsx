'use client'

import { motion } from 'framer-motion'
import { cn, letterAnimation } from '@/shared/lib'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function AnimatedText({ text, className, as: Component = 'span' }: AnimatedTextProps) {
  const letters = text.split('')

  return (
    <Component className={cn('inline-block', className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="show"
        aria-hidden
        className="inline-block"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}
