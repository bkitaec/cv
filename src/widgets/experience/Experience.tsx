import { experiences, type Experience as ExperienceItem } from '@/data'
import { BulletList, Chip, Section } from '@/shared/ui'
import { cn } from '@/shared/lib'

const EARLIER = new Set(['wanderbeat', 'codenetix', 'ekatong', 'newaion'])

function Role({ item, compact }: { item: ExperienceItem; compact?: boolean }) {
  return (
    <article id={`exp-${item.id}`} className="scroll-mt-8 grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-4">
      <header className="min-w-0">
        <h3 className={cn('font-semibold text-fg', compact ? 'text-sm' : 'text-base')}>
          {item.role} <span className="font-normal text-subtle">·</span>{' '}
          <span className="text-accent">{item.company}</span>
        </h3>
        {!compact && <p className="text-xs text-subtle">{item.location}</p>}
      </header>
      <p className="font-mono text-xs text-subtle sm:text-right">
        {item.period.replace(' - ', ' — ')}
        {item.current && (
          <span className="ml-2 rounded bg-accent-soft px-1.5 py-0.5 font-sans font-semibold text-accent">now</span>
        )}
      </p>
      <div className="sm:col-span-2">
        <p className={cn('mt-1 text-muted', compact ? 'text-xs' : 'text-sm')}>{item.description}</p>
        {!compact && (
          <>
            <BulletList items={item.achievements} visible={3} className="mt-3" />
            <div className="mt-3 flex flex-wrap gap-1">
              {item.skills.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  )
}

export function Experience({ className }: { className?: string }) {
  const main = experiences.filter((e) => !EARLIER.has(e.id))
  const earlier = experiences.filter((e) => EARLIER.has(e.id))

  return (
    <Section id="experience" className={className} title="Experience" aside={`${experiences.length} roles`}>
      <div className="space-y-8 print:space-y-4">
        {main.map((item) => (
          <Role key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-line bg-surface p-4 print:mt-4 print:p-3">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-subtle">Earlier, 2010 — 2018</h3>
        <div className="space-y-4">
          {earlier.map((item) => (
            <Role key={item.id} item={item} compact />
          ))}
        </div>
      </div>
    </Section>
  )
}
