import { Icon } from '@/shared/ui/icon'
import { cn } from '@/shared/utils/cn'
import { THEME_MODE } from '../constants'
import { useSwithTheme } from '../model/use-switcher'

export function ThemeSwither() {
  const { onClick, theme } = useSwithTheme()
  const isDark = theme === THEME_MODE.DARK

  return (
    <button
      type="button"
      onClick={onClick}
      role="switch"
      aria-checked={isDark}
      aria-label={`Theme: ${isDark ? 'dark' : 'light'}. Press to switch.`}
      title={`Switch theme on ${isDark ? 'light' : 'dark'}`}
      className="relative w-20 h-10 flex items-center justify-evenly rounded-md transition bg-primary dark:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div
        className={cn(
          'absolute w-10 h-8 bg-secondary dark:bg-secondary-dark left-1 rounded-md transition-transform',
          {
            ['translate-x-8']: isDark
          }
        )}
        aria-hidden="true"
      />
      <Icon
        name="sun"
        className="relative z-10 text-foreground dark:text-foreground-dark"
        aria-hidden="true"
      />
      <Icon
        name="moon"
        className="relative z-10 text-foreground dark:text-foreground-dark"
        aria-hidden="true"
      />
    </button>
  )
}
