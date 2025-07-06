import { PATHNAMES } from '@/shared/config'
import { Icon } from '@/shared/ui/icon'
import { cn } from '@/shared/utils'
import { Link } from 'react-router-dom'

export const NavDesktop = () => {
  return (
    <nav className="hidden lg:grid grid-cols-3 gap-1">
      <Link
        className={cn(
          'animate-fade-left flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 rounded-l-2xl text-xl',
          {
            ['bg-accent dark:bg-accent-dark']: true
          }
        )}
        to={PATHNAMES.HOME}
      >
        <Icon name="home" /> Main
      </Link>
      <Link
        className="animate-fade-left flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 text-xl animate-delay-100"
        to={PATHNAMES.RACES}
      >
        <Icon name="columns" /> Races
      </Link>
      <Link
        to={PATHNAMES.ABOUT}
        className="animate-fade-left flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 rounded-r-2xl text-xl animate-delay-200"
      >
        <Icon name="logo" className="h-4 w-4" /> About
      </Link>
    </nav>
  )
}
