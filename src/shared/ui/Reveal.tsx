'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/shared/lib'

interface RevealProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section'
  id?: string
}

/** Fades content up once when it enters the viewport. */
export function Reveal({ children, className, as: Tag = 'div', id }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} id={id} className={cn('reveal', className)}>
      {children}
    </Tag>
  )
}
