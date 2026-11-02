'use client'

import { useEffect, useRef, useState } from 'react'
import { timeline, lastUpdated } from '@/data'
import { Section } from '@/shared/ui'
import { cn } from '@/shared/lib'

const START = 2010
const END = 2027
const toYears = (ym: string) => {
  const [y, m] = ym.split('-').map(Number)
  return y + (m - 1) / 12
}
// Fixed at build data time so server and client render identical widths
const NOW = toYears(lastUpdated) + 1 / 12
const pct = (v: number) => ((v - START) / (END - START)) * 100
const ticks = Array.from({ length: (END - START) / 2 + 1 }, (_, i) => START + i * 2)
const fmt = (ym: string) =>
  new Date(`${ym}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

/** Gantt-style career overview: overlapping roles are visible at a glance. */
export function CareerTimeline({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true)
        observer.disconnect()
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="career" className={className} title="Career timeline" aside="2010 → today">
      <div ref={ref} className="rounded-xl border border-line bg-surface p-4">
        <div className="relative ml-0 sm:ml-44">
          <div className="relative h-5 text-xs text-subtle">
            {ticks.map((t) => (
              <span
                key={t}
                className={cn('absolute -translate-x-1/2 font-mono', (t - START) % 4 !== 0 && 'hidden sm:inline')}
                style={{ left: `${pct(t)}%` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <ul className="relative space-y-2">
          {timeline.map((item, i) => {
            const start = toYears(item.start)
            const end = item.end ? toYears(item.end) + 1 / 12 : NOW
            const current = !item.end
            return (
              <li key={item.id} className="sm:flex sm:items-center">
                <div className="mb-1 flex items-baseline justify-between gap-2 text-xs sm:mb-0 sm:block sm:w-44 sm:shrink-0 sm:pr-4">
                  <span className="font-semibold text-fg">{item.company}</span>
                  <span className="text-subtle sm:block sm:truncate">{item.label}</span>
                </div>
                <div className="relative h-6 flex-1 rounded-md bg-surface-2">
                  {ticks.map((t) => (
                    <span key={t} className="absolute inset-y-0 w-px bg-line" style={{ left: `${pct(t)}%` }} />
                  ))}
                  <a
                    href={`#exp-${item.id}`}
                    title={`${item.label} · ${item.company} · ${fmt(item.start)} – ${item.end ? fmt(item.end) : 'present'}`}
                    className={cn(
                      'timeline-bar absolute inset-y-1 origin-left rounded transition-transform duration-700 ease-out-soft hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent print:scale-x-100',
                      current ? 'bg-accent' : 'bg-subtle/60',
                      shown ? 'scale-x-100' : 'scale-x-0',
                    )}
                    style={{
                      left: `${pct(start)}%`,
                      width: `${Math.max(pct(end) - pct(start), 1)}%`,
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <span className="sr-only">
                      {item.label} at {item.company}
                    </span>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
        <p className="mt-3 flex items-center gap-4 text-xs text-subtle">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-4 rounded-sm bg-accent" /> Current
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-4 rounded-sm bg-subtle/60" /> Previous
          </span>
          <span className="print:hidden">Click a bar to jump to the role</span>
        </p>
      </div>
    </Section>
  )
}
