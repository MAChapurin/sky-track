import { tv } from 'tailwind-variants'

const flexBetween = tv({ base: 'flex items-center justify-between' })

const text = tv({
  base: 'transition-colors',
  variants: {
    variant: {
      primary: 'text-foreground dark:text-foreground-dark',
      secondary: 'text-muted dark:text-muted-dark'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

const background = tv({
  base: 'transition-colors',
  variants: {
    variant: {
      full: 'bg-background dark:bg-background-dark',
      primary: 'bg-primary dark:bg-primary-dark',
      secondary: 'bg-secondary dark:bg-secondary-dark'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

const colSpan = tv({ base: 'col-span-2 md:col-span-1' })

export { flexBetween, text, background, colSpan }
