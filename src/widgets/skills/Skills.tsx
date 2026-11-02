import { skillCategories } from '@/data'
import { Chip, Section } from '@/shared/ui'

export function Skills({ className }: { className?: string }) {
  return (
    <Section
      id="skills"
      className={className}
      title="Skills"
      aside={
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" /> expert
        </span>
      }
    >
      <dl className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
        {skillCategories.map((cat) => (
          <div key={cat.id} className="grid gap-2 p-3 sm:grid-cols-[160px_1fr] sm:gap-4">
            <dt className="text-sm font-semibold text-fg">{cat.name}</dt>
            <dd className="flex flex-wrap gap-1">
              {cat.skills.map((s) => (
                <Chip key={s.name} strong={s.level === 'expert'}>
                  {s.level === 'expert' && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                  {s.name}
                </Chip>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
