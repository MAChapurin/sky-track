import { cn } from '@/shared/utils'
import { useBurgerTrigger } from '../model/useBurgerTrigger'
import { Icon } from '@/shared/ui'

export const BurgerTrigger = () => {
  const { isOpen, onToggle } = useBurgerTrigger()
  return (
    <button className="relative group lg:hidden" onClick={onToggle}>
      <div className="relative flex flex-col overflow-hidden items-center justify-center rounded w-10 h-10 transform transition-all bg-primary dark:bg-primary-dark  duration-200">
        <div
          className={cn(
            'transform transition-all duration-150 overflow-hidden -translate-y-5',
            {
              ['translate-y-3']: isOpen
            }
          )}
        >
          <Icon
            name="arrowDown"
            className="h-6 w-6h-6 w-6 animate-bounce text-white"
          />
        </div>

        <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
          <div
            className={cn(
              'bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left ',
              {
                ['translate-y-6']: isOpen
              }
            )}
          ></div>
          <div
            className={cn(
              'bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 delay-75',
              {
                ['translate-y-6']: isOpen
              }
            )}
          ></div>
          <div
            className={cn(
              'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left  delay-100',
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
