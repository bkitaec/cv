import { Reveal } from './Reveal'
import { cn } from '@/shared/lib'

interface SectionProps {
  id: string
  title: string
  aside?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, aside, children, className }: SectionProps) {
  return (
    <Reveal as="section" id={id} className={cn('scroll-mt-8', className)}>
      <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-line pb-2 print:mb-3 [break-after:avoid]">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-subtle">{title}</h2>
        {aside && <div className="text-xs text-subtle">{aside}</div>}
      </div>
      {children}
    </Reveal>
  )
}
