import { PATHNAMES } from '@/shared/config'
import { Icon } from '@/shared/ui/icon'
import { cn } from '@/shared/utils'
import { NavLink } from 'react-router'

export const NavDesktop = () => {
  return (
    <nav className="hidden lg:grid grid-cols-3 gap-1">
      <NavLink
        className={({ isActive }) =>
          cn(
            'animate-fade-left flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 rounded-l-2xl text-xl',
            {
              ['bg-accent dark:bg-accent-dark']: isActive
            }
          )
        }
        to={PATHNAMES.HOME}
      >
        <Icon name="home" /> Main
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(
            'animate-fade-left flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 text-xl animate-delay-100',
            {
              ['bg-accent dark:bg-accent-dark']: isActive
            }
          )
        }
        to={PATHNAMES.RACES}
      >
        <Icon name="columns" /> Races
      </NavLink>
      <NavLink
        to={PATHNAMES.ABOUT}
        className={({ isActive }) =>
          cn(
            'animate-fade-left flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 rounded-r-2xl text-xl animate-delay-200',
            {
              ['bg-accent dark:bg-accent-dark']: isActive
            }
          )
        }
      >
        <Icon name="logo" className="h-4 w-4" /> About
      </NavLink>
    </nav>
  )
}
