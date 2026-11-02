import { ArrowUpRight, Sparkle } from '@phosphor-icons/react/dist/ssr'
import { mic3Projects, projects } from '@/data'
import { BulletList, Chip, Section } from '@/shared/ui'

interface Card {
  id: string
  name: string
  period: string
  context: string
  description: string
  highlights: string[]
  tech: string[]
  link?: string
  ai?: string
}

const reservble = projects.find((p) => p.id === 'reservble')

const cards: Card[] = [
  ...mic3Projects.map((p) => ({
    id: p.id,
    name: p.name,
    period: p.period,
    context: 'MI-C3',
    description: p.description,
    highlights: p.highlights,
    tech: p.tech,
    link: p.link,
    ai: p.aiPowered ? (p.aiPercentage ? `${p.aiPercentage}% with Claude` : 'Built with Claude') : undefined,
  })),
  ...(reservble
    ? [
        {
          id: reservble.id,
          name: reservble.title,
          period: '2019 - Present',
          context: 'Co-founder',
          description: reservble.description,
          highlights: reservble.highlights,
          tech: reservble.tech,
          link: reservble.link,
        },
      ]
    : []),
]

export function Projects({ className }: { className?: string }) {
  return (
    <Section id="projects" className={className} title="Selected projects" aside={`${cards.length} products`}>
      <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2 print:gap-3">
        {cards.map((c) => (
          <article
            key={c.id}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-4 print:p-3 [break-inside:avoid] transition-transform duration-500 ease-out-soft hover:-translate-y-0.5"
          >
            <header className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="font-mono text-xs text-subtle">
                  {c.context} · {c.period.replace(' - ', ' — ')}
                </p>
                <h3 className="mt-1 text-base font-semibold text-fg">{c.name}</h3>
              </div>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${c.name}`}
                  className="shrink-0 rounded-lg border border-line p-1.5 text-muted transition-colors duration-300 ease-out-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent print:hidden"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </header>
            {c.ai && (
              <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-md bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                <Sparkle className="h-3 w-3" weight="fill" /> {c.ai}
              </span>
            )}
            <p className="mt-2 line-clamp-3 text-sm text-muted print:line-clamp-none">{c.description}</p>
            <BulletList items={c.highlights} visible={3} className="mt-3" />
            <div className="mt-auto flex flex-wrap gap-1 pt-4">
              {c.tech.slice(0, 6).map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
