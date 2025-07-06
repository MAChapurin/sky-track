import { tv } from 'tailwind-variants'
import { Icon } from '@/shared/ui'

const detailButton = tv({
  base: [
    'gap-2 p-4 text-xl',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
    'flex flex-col items-center justify-center',
    'bg-primary dark:bg-primary-dark',
    'text-foreground dark:text-foreground-dark transition-colors'
  ],
  variants: {
    rounded: {
      left: 'rounded-l-2xl',
      right: 'rounded-r-2xl',
      none: ''
    }
  },
  defaultVariants: {
    rounded: 'none'
  }
})

export const DetailControls = () => {
  return (
    <div className="grid grid-cols-4 gap-1">
      <button
        type="button"
        data-ignore-swipe
        className={detailButton({ rounded: 'left' })}
      >
        <Icon name="route" />
        Route
      </button>
      <button type="button" data-ignore-swipe className={detailButton()}>
        <Icon name="follow" />
        Follow
      </button>
      <button type="button" data-ignore-swipe className={detailButton()}>
        <Icon name="shared" />
        Share
      </button>
      <button
        type="button"
        data-ignore-swipe
        className={detailButton({ rounded: 'right' })}
      >
        <Icon name="more" />
        More
      </button>
    </div>
  )
}
