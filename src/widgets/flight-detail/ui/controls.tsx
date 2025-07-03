import { Icon } from '@/shared/ui'
import { cn } from '@/shared/utils'

const styles = {
  flexCenter: 'flex flex-col items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  textPrimary: 'text-foreground dark:text-foreground-dark transition-colors',
  textSecondary: 'text-muted dark:text-muted-dark transition-colors',
  backgroundFull: 'bg-background dark:bg-background-dark transition-colors',
  backgroundPrimary: 'bg-primary dark:bg-primary-dark transition-colors',
  backgroundSecondary: 'bg-secondary dark:bg-secondary-dark transition-colors',
  colSpan: 'col-span-2 md:col-span-1'
} as const

export const DetailControls = () => {
  return (
    <div className="grid grid-cols-4 gap-1">
      <button
        data-ignore-swipe
        className={cn(
          'gap-2 p-4 rounded-l-2xl text-xl',
          styles.textPrimary,
          styles.flexCenter,
          styles.backgroundPrimary
        )}
      >
        <Icon name="route" />
        Route
      </button>
      <button
        data-ignore-swipe
        className={cn(
          'gap-2 p-4 text-xl',
          styles.textPrimary,
          styles.flexCenter,
          styles.backgroundPrimary
        )}
      >
        <Icon name="follow" />
        Follow
      </button>
      <button
        data-ignore-swipe
        className={cn(
          'gap-2 p-4 text-xl',
          styles.textPrimary,
          styles.flexCenter,
          styles.backgroundPrimary
        )}
      >
        <Icon name="shared" />
        Share
      </button>
      <button
        data-ignore-swipe
        className={cn(
          'gap-2 p-4 rounded-r-2xl text-xl',
          styles.textPrimary,
          styles.flexCenter,
          styles.backgroundPrimary
        )}
      >
        <Icon name="more" />
        More
      </button>
    </div>
  )
}
