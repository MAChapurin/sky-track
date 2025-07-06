import { useMobileMenu } from '../model/useMobileMenu'
import { NavMobile } from '@/features/nav-mobile/ui/nav-mobile'
import { cn } from '@/shared/utils'
import { ControlsGrid } from '@/widgets/controls/ui/controls-grid'

export const MobileMenu = () => {
  const { isOpen, ref, hasInteracted } = useMobileMenu()
  if (!hasInteracted) return null
  return (
    <div
      inert={!isOpen}
      ref={ref}
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 absolute top-14 left-0 w-full h-fit z-50 bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark rounded-2xl p-4 animate-duration-900',
        {
          ['animate-fade-up']: hasInteracted && isOpen,
          ['animate-fade-down animate-reverse']: hasInteracted && !isOpen
        }
      )}
    >
      <NavMobile />
      <ControlsGrid />
    </div>
  )
}
