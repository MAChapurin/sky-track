import { PATHNAMES } from '@/shared/config'
import { useAppSelector } from '@/shared/hooks'
import { CustomNavLink, Icon } from '@/shared/ui'
import { NavLink } from 'react-router'
import { cn } from '@/shared/utils'

export const FavoritesLink = ({
  isMobileVariant = false
}: {
  isMobileVariant?: boolean
}) => {
  const { favorites } = useAppSelector(state => state.favorites)
  const count = favorites.length

  if (isMobileVariant) {
    return (
      <CustomNavLink to={PATHNAMES.FAVORITES} className="p-1">
        <Icon name="bookmark" className="h-4 w-4" /> Favorites{' '}
        <span
          aria-live="polite"
          aria-atomic="true"
          className="py-1 px-2 rounded bg-secondary dark:bg-secondary-dark ml-auto transition-colors"
        >
          {count}
        </span>
      </CustomNavLink>
    )
  }

  return (
    <NavLink
      to={PATHNAMES.FAVORITES}
      className={({ isActive }) =>
        cn(
          'relative w-10 h-10 bg-primary dark:bg-primary-dark transition-colors p-2 rounded flex items-center justify-center animate-fade-left',
          {
            ['bg-accent dark:bg-accent-dark']: isActive
          }
        )
      }
      aria-label={`Favorites (${count})`}
    >
      <Icon
        name="bookmark"
        className="text-foreground dark:text-foreground-dark transition-colors"
        aria-hidden="true"
      />
      {count > 0 && (
        <span
          aria-live="polite"
          aria-atomic="true"
          className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center rounded-full bg-foreground dark:bg-foreground-dark text-background dark:text-background-dark text-xs font-semibold min-w-[18px] h-5 px-1 leading-none select-none transition-colors"
        >
          {count}
        </span>
      )}
    </NavLink>
  )
}
