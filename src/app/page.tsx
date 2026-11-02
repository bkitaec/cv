import { Sidebar } from '@/widgets/sidebar/Sidebar'
import { Summary } from '@/widgets/summary/Summary'
import { CareerTimeline } from '@/widgets/career-timeline/CareerTimeline'
import { Experience } from '@/widgets/experience/Experience'
import { Projects } from '@/widgets/projects/Projects'
import { Skills } from '@/widgets/skills/Skills'
import { Activity } from '@/widgets/activity/Activity'
import { CommandPalette } from '@/features/command-palette/CommandPalette'
import { lastUpdated } from '@/data'

export default function Home() {
  const updated = new Date(`${lastUpdated}-01`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8 lg:py-12 print:max-w-none print:p-0">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16 print:block">
          <Sidebar />
          <main id="content" className="min-w-0 space-y-12 print:flex print:flex-col print:gap-6 print:space-y-0">
            <Summary className="print:order-1" />
            <CareerTimeline className="print:order-2" />
            <Experience className="print:order-3" />
            <Projects className="print:order-5" />
            <Skills className="print:order-4" />
            <Activity className="print:hidden" />
          </main>
        </div>
        <footer className="mt-16 flex flex-wrap justify-between gap-2 border-t border-line pt-6 text-xs text-subtle print:hidden">
          <span>© {lastUpdated.slice(0, 4)} Denys Bogdanov · Updated {updated}</span>
          <span>Built with Next.js, Tailwind and Claude Code</span>
        </footer>
      </div>
      <CommandPalette />
    </>
  )
}
