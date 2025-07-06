import { Icon } from '@/shared/ui/icon'
import { cn } from '@/shared/utils/cn'

interface CloseButtonProps {
  onClick: () => void
  label?: string
}

export const CloseButton = ({
  onClick,
  label = 'Close window'
}: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      data-ignore-swipe
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-accent dark:hover:bg-accent-dark relative z-10 bg-secondary dark:bg-secondary-dark text-foreground dark:text-foreground-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
      )}
      aria-label={label}
      title={label}
      type="button"
    >
      <Icon name="close" />
    </button>
  )
}
