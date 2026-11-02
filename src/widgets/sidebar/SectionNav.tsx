'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/shared/lib'

export const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'career', label: 'Career' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'activity', label: 'Activity' },
]

export function SectionNav() {
  const [current, setCurrent] = useState('summary')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setCurrent(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="Sections" className="hidden lg:block print:hidden">
      <ul className="space-y-1">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={current === id ? 'location' : undefined}
              className={cn(
                'group flex items-center gap-3 rounded-md py-1 text-sm transition-colors duration-300 ease-out-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                current === id ? 'text-fg' : 'text-subtle hover:text-muted',
              )}
            >
              <span
                className={cn(
                  'h-px bg-current transition-transform duration-500 ease-out-soft origin-left',
                  current === id ? 'w-8 scale-x-100' : 'w-8 scale-x-50',
                )}
              />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
