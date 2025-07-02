import { useMobileMenu } from '../model/useMobileMenu'
import { NavMobile } from '@/features/nav-mobile/ui/nav-mobile'
import { cn } from '@/shared/utils'
import { ControlsGrid } from '@/widgets/controls/ui/controls-grid'

export const MobileMenu = () => {
  const { isOpen, ref } = useMobileMenu()

  return (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 absolute top-20 left-0 w-full h-fit z-50 bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark rounded-2xl p-4 -translate-y-300 transition-transform',
        { ['translate-y-0']: isOpen }
      )}
    >
      <NavMobile />
      <ControlsGrid />
    </div>
  )
}
