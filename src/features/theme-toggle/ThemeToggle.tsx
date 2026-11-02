'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '@phosphor-icons/react'
import { cn } from '@/shared/lib'

const subscribe = () => () => {}

export function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false)
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()
  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors duration-300 ease-out-soft hover:text-fg active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent print:hidden',
        className,
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
