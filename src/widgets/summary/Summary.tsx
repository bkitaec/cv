import { activityTotal, personal } from '@/data'
import { Section } from '@/shared/ui'

const metrics = [
  { value: '16', unit: 'yrs', label: 'in web development, 8+ at MI-C3' },
  { value: `${(Math.floor(activityTotal / 100) * 100).toLocaleString('en-US')}+`, unit: '', label: 'commits and merges across MI-C3 repos' },
  { value: '26', unit: '%', label: 'of the current Affectli frontend code' },
  { value: '~95', unit: '%', label: 'of ComplyRespond.ai written with Claude Code' },
]

export function Summary({ className }: { className?: string }) {
  return (
    <Section id="summary" className={className} title="Summary">
      <p className="max-w-[680px] text-lg text-fg print:max-w-none print:text-base">{personal.summary}</p>
      <dl className="mt-6 print:mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4 print:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-surface p-4 print:p-2">
            <dt className="sr-only">{m.label}</dt>
            <dd>
              <span className="font-mono text-3xl font-semibold tracking-tight print:text-xl text-fg">
                {m.value}
                <span className="text-xl text-subtle">{m.unit}</span>
              </span>
              <span className="mt-1 block text-xs text-muted">{m.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
