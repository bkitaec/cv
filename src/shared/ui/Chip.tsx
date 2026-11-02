import { cn } from '@/shared/lib'

interface ChipProps {
  children: React.ReactNode
  strong?: boolean
  className?: string
}

export function Chip({ children, strong, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs',
        strong
          ? 'border-accent/30 bg-accent-soft text-fg'
          : 'border-line bg-surface-2 text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
