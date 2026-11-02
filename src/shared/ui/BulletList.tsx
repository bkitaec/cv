'use client'

import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { cn } from '@/shared/lib'

interface BulletListProps {
  items: string[]
  visible?: number
  className?: string
}

/** Shows the first `visible` bullets; the rest expand on demand and always print. */
export function BulletList({ items, visible = 3, className }: BulletListProps) {
  const [open, setOpen] = useState(false)
  const hidden = items.length - visible

  return (
    <div className={className}>
      <ul className="space-y-1 text-sm text-muted">
        {items.map((item, i) => (
          <li
            key={item}
            className={cn(
              'relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent',
              i >= visible && !open && 'hidden print:block',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-2 inline-flex items-center gap-1 rounded-md text-xs font-semibold text-accent transition-opacity duration-300 ease-out-soft hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent print:hidden"
        >
          {open ? 'Show less' : `Show ${hidden} more`}
          <CaretDown
            className={cn('h-3 w-3 transition-transform duration-500 ease-out-soft', open && 'rotate-180')}
            weight="bold"
          />
        </button>
      )}
    </div>
  )
}
