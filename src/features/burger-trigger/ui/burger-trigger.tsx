import { cn } from '@/shared/utils'
import { useBurgerTrigger } from '../model/useBurgerTrigger'
import { Icon } from '@/shared/ui'

export const BurgerTrigger = () => {
  const { isOpen, onToggle } = useBurgerTrigger()

  return (
    <button
      onClick={onToggle}
      className="relative group lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`${isOpen ? 'Open' : 'Close'} mobile menu`}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      type="button"
    >
      <div className="relative flex flex-col overflow-hidden items-center justify-center rounded w-10 h-10 transform transition-all bg-primary dark:bg-primary-dark text-foreground dark:text-foreground-dark duration-200">
        <div
          className={cn(
            'transform transition-all duration-150 overflow-hidden -translate-y-5',
            {
              ['translate-y-3']: isOpen
            }
          )}
          aria-hidden="true"
        >
          <Icon name="arrowDown" className="h-6 w-6 animate-bounce" />
        </div>

        <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
          <div
            className={cn(
              'mb-1.5 h-0.5 w-7 transform transition-all duration-300 origin-left bg-foreground dark:bg-foreground-dark',
              {
                ['translate-y-6']: isOpen
              }
            )}
          ></div>
          <div
            className={cn(
              'mb-1.5 h-0.5 w-7 rounded transform transition-all duration-300 delay-75 bg-foreground dark:bg-foreground-dark',
              {
                ['translate-y-6']: isOpen
              }
            )}
          ></div>
          <div
            className={cn(
              'h-0.5 w-7 transform transition-all duration-300 origin-left delay-100 bg-foreground dark:bg-foreground-dark',
              {
                ['translate-y-6']: isOpen
              }
            )}
          ></div>
        </div>
      </div>
    </button>
  )
}
