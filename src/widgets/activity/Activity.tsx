import { activity, activityTotal } from '@/data'
import { Section } from '@/shared/ui'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const max = Math.max(...activity.flatMap((y) => y.months))
const LEVELS = ['bg-surface-2', 'bg-accent/25', 'bg-accent/45', 'bg-accent/70', 'bg-accent']

const level = (n: number) => (n === 0 ? 0 : Math.min(4, Math.ceil((n / max) * 4)))

/** GitHub-style contribution grid built from real git history. */
export function Activity() {
  return (
    <Section id="activity" title="Commit activity" aside={`${activityTotal.toLocaleString('en-US')} since 2020`}>
      <div className="overflow-x-auto rounded-xl border border-line bg-surface p-4">
        <table className="w-full min-w-[420px] table-fixed border-separate border-spacing-1">
          <caption className="sr-only">Commits and merges per month, 2020 to 2026</caption>
          <colgroup>
            <col className="w-12" />
            {MONTHS.map((m) => (
              <col key={m} />
            ))}
            <col className="w-14" />
          </colgroup>
          <thead>
            <tr>
              <th />
              {MONTHS.map((m) => (
                <th key={m} scope="col" className="font-mono text-xs font-normal text-subtle">
                  {m[0]}
                </th>
              ))}
              <th scope="col" className="text-right font-mono text-xs font-normal text-subtle">
                total
              </th>
            </tr>
          </thead>
          <tbody>
            {activity.map((y) => (
              <tr key={y.year}>
                <th scope="row" className="pr-2 text-left font-mono text-xs font-normal text-subtle">
                  {y.year}
                </th>
                {y.months.map((n, i) => (
                  <td key={i} className="p-0">
                    <div
                      title={`${MONTHS[i]} ${y.year}: ${n} commits`}
                      className={`h-4 rounded-sm ${LEVELS[level(n)]}`}
                    />
                  </td>
                ))}
                <td className="pl-2 text-right font-mono text-xs text-muted">{y.months.reduce((a, b) => a + b, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-subtle">
          <span>Affectli, ComplyRespond.ai and Telkom repositories, from git history.</span>
          <span className="inline-flex items-center gap-1">
            less
            {LEVELS.map((c) => (
              <span key={c} className={`h-3 w-3 rounded-sm ${c}`} />
            ))}
            more
          </span>
        </div>
      </div>
    </Section>
  )
}
