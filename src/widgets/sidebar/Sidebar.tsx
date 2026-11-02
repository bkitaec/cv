import Image from 'next/image'
import { EnvelopeSimple, GithubLogo, Globe, LinkedinLogo, MapPin } from '@phosphor-icons/react/dist/ssr'
import { personal, topSkills } from '@/data'
import { Chip } from '@/shared/ui'
import { PrintButton } from '@/features/print/PrintButton'
import { ThemeToggle } from '@/features/theme-toggle/ThemeToggle'
import { CommandHint } from '@/features/command-palette/CommandPalette'
import { SectionNav } from './SectionNav'
import avatar from '@/shared/assets/avatar.webp'

const links = [
  { href: `mailto:${personal.email}`, label: personal.email, icon: EnvelopeSimple },
  { href: personal.linkedin, label: 'linkedin.com/in/bkitaec', icon: LinkedinLogo },
  { href: personal.github, label: 'github.com/bkitaec', icon: GithubLogo },
  { href: personal.website, label: 'bkitaec.github.io/cv', icon: Globe },
]

export function Sidebar() {
  return (
    <aside className="space-y-8 lg:sticky lg:top-12 lg:max-h-[calc(100vh-6rem)] lg:self-start lg:overflow-y-auto lg:[scrollbar-width:none] print:static print:mb-6 print:grid print:max-h-none print:grid-cols-3 print:gap-x-6 print:gap-y-4 print:space-y-0 print:border-b print:border-line print:pb-4">
      <div className="print:col-span-3 print:flex print:items-center print:gap-4">
        <Image
          src={avatar}
          alt="Portrait of Denys Bogdanov"
          width={96}
          height={96}
          priority
          className="mb-4 h-24 w-24 rounded-2xl border border-line object-cover print:mb-0 print:h-16 print:w-16"
        />
        <div>
        <h1 className="bg-gradient-to-r from-black to-[#666666] bg-clip-text text-3xl font-semibold tracking-tight text-transparent dark:from-white dark:to-[#9b9b9b] print:bg-none print:text-black">
          {personal.name}
        </h1>
        <p className="mt-1 text-base text-muted">Frontend Team Lead · Co-founder &amp; CTO</p>
        <p className="mt-2 inline-flex items-center gap-1 text-sm text-subtle">
          <MapPin className="h-4 w-4" /> {personal.location}
        </p>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-surface p-3 print:self-start print:p-2">
        <p className="flex items-center gap-2 text-xs font-semibold text-fg">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none print:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to roles
        </p>
        <p className="mt-1 text-sm text-muted">{personal.openTo}</p>
      </div>

      <div className="flex flex-wrap gap-2 print:hidden">
        <PrintButton className="flex-1" />
        <ThemeToggle />
      </div>

      <ul className="space-y-2 text-sm print:space-y-1 print:text-xs">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md text-muted transition-colors duration-300 ease-out-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </a>
          </li>
        ))}
      </ul>

      <SectionNav />

      <div>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-subtle">Core stack</h2>
        <div className="flex flex-wrap gap-1">
          {topSkills.map((s) => (
            <Chip key={s} strong>
              {s}
            </Chip>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm lg:grid-cols-1 print:col-span-3 print:grid-cols-2 print:gap-6 print:text-xs">
        <div>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-subtle">Languages</h2>
          <ul className="space-y-1">
            {personal.languages.map((l) => (
              <li key={l.name} className="flex justify-between gap-2">
                <span className="text-fg">{l.name}</span>
                <span className="text-subtle">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-subtle">Education</h2>
          <p className="text-fg">{personal.education.degree}</p>
          <p className="text-subtle">
            {personal.education.school}, {personal.education.period}
          </p>
        </div>
      </div>

      <CommandHint className="hidden lg:inline-flex" />
    </aside>
  )
}
