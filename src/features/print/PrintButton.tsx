'use client'

import { FilePdf } from '@phosphor-icons/react'
import { cn } from '@/shared/lib'

export function PrintButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg bg-fg px-3 py-2 text-sm font-semibold text-bg transition-opacity duration-300 ease-out-soft hover:opacity-85 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent print:hidden',
        className,
      )}
    >
      <FilePdf className="h-4 w-4" weight="bold" />
      Download PDF
    </button>
  )
}
