'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  ArrowSquareOut,
  Briefcase,
  Copy,
  FilePdf,
  Folders,
  GithubLogo,
  LinkedinLogo,
  MagnifyingGlass,
  Moon,
  Pulse,
  Stack,
  TreeStructure,
  UserCircle,
} from '@phosphor-icons/react'
import { personal } from '@/data'
import { cn } from '@/shared/lib'

interface Command {
  id: string
  label: string
  group: 'Navigate' | 'Actions' | 'Links'
  icon: React.ElementType
  run: () => void
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ block: 'start' })

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [toast, setToast] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { resolvedTheme, setTheme } = useTheme()

  const commands = useMemo<Command[]>(
    () => [
      { id: 'summary', label: 'Summary', group: 'Navigate', icon: UserCircle, run: () => scrollTo('summary') },
      { id: 'career', label: 'Career timeline', group: 'Navigate', icon: TreeStructure, run: () => scrollTo('career') },
      { id: 'experience', label: 'Experience', group: 'Navigate', icon: Briefcase, run: () => scrollTo('experience') },
      { id: 'projects', label: 'Projects', group: 'Navigate', icon: Folders, run: () => scrollTo('projects') },
      { id: 'skills', label: 'Skills', group: 'Navigate', icon: Stack, run: () => scrollTo('skills') },
      { id: 'activity', label: 'Commit activity', group: 'Navigate', icon: Pulse, run: () => scrollTo('activity') },
      {
        id: 'copy-email',
        label: `Copy email · ${personal.email}`,
        group: 'Actions',
        icon: Copy,
        run: () => {
          navigator.clipboard?.writeText(personal.email).then(
            () => setToast(`Copied ${personal.email}`),
            () => setToast('Copy failed. Select the email in the sidebar instead.'),
          )
        },
      },
      { id: 'pdf', label: 'Download PDF', group: 'Actions', icon: FilePdf, run: () => setTimeout(() => window.print(), 50) },
      {
        id: 'theme',
        label: 'Toggle light / dark theme',
        group: 'Actions',
        icon: Moon,
        run: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
      },
      { id: 'linkedin', label: 'Open LinkedIn', group: 'Links', icon: LinkedinLogo, run: () => window.open(personal.linkedin, '_blank', 'noopener') },
      { id: 'github', label: 'Open GitHub', group: 'Links', icon: GithubLogo, run: () => window.open(personal.github, '_blank', 'noopener') },
      { id: 'affectli', label: 'Open affectli.com', group: 'Links', icon: ArrowSquareOut, run: () => window.open('https://affectli.com', '_blank', 'noopener') },
      { id: 'comply', label: 'Open complyrespond.ai', group: 'Links', icon: ArrowSquareOut, run: () => window.open('https://complyrespond.ai', '_blank', 'noopener') },
    ],
    [resolvedTheme, setTheme],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q)) : commands
  }, [commands, query])

  useEffect(() => {
    const show = () => {
      setQuery('')
      setActive(0)
      setOpen(true)
    }
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => {
          if (!v) {
            setQuery('')
            setActive(0)
          }
          return !v
        })
      }
    }
    const onOpen = show
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [])


  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2400)
    return () => clearTimeout(t)
  }, [toast])

  const runAt = (index: number) => {
    const cmd = filtered[index]
    if (!cmd) return
    setOpen(false)
    cmd.run()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false)
    else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      runAt(active)
    }
  }

  let lastGroup = ''

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-24 backdrop-blur-sm print:hidden"
          onMouseDown={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <MagnifyingGlass className="h-4 w-4 text-subtle" />
              <input
                ref={inputRef}
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setActive(0)
                }}
                placeholder="Jump to a section or run an action"
                aria-label="Search commands"
                className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-subtle"
              />
              <kbd className="rounded border border-line px-1.5 font-mono text-xs text-subtle">esc</kbd>
            </div>
            <ul role="listbox" className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-subtle">No matches for “{query}”. Try “email” or “projects”.</li>
              )}
              {filtered.map((cmd, i) => {
                const header = cmd.group !== lastGroup
                lastGroup = cmd.group
                const Icon = cmd.icon
                return (
                  <li key={cmd.id}>
                    {header && <div className="px-3 pb-1 pt-2 text-xs font-semibold text-subtle">{cmd.group}</div>}
                    <button
                      type="button"
                      role="option"
                      aria-selected={i === active}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => runAt(i)}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors duration-200',
                        i === active ? 'bg-accent-soft text-fg' : 'text-muted',
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {cmd.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-line bg-surface px-4 py-2 text-sm text-fg shadow-lg print:hidden"
        >
          {toast}
        </div>
      )}
    </>
  )
}

export function CommandHint({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
      className={cn(
        'inline-flex h-9 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-xs text-muted transition-colors duration-300 ease-out-soft hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent print:hidden',
        className,
      )}
    >
      <MagnifyingGlass className="h-3.5 w-3.5" />
      Quick jump
      <kbd className="rounded border border-line px-1 font-mono">Ctrl K</kbd>
    </button>
  )
}
