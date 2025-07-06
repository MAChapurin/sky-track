import { PATHNAMES } from '@/shared/config'
import { useAppSelector } from '@/shared/hooks'
import { Icon } from '@/shared/ui'
import { Link } from 'react-router-dom'

export const FavoritesLink = ({
  isMobileVariant = false
}: {
  isMobileVariant?: boolean
}) => {
  const { favorites } = useAppSelector(state => state.favoritesReducer)
  const count = favorites.length

  if (isMobileVariant) {
    return (
      <Link
        to={PATHNAMES.FAVORITES}
        className="flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 text-xl"
      >
        <Icon name="bookmark" className="h-4 w-4" /> Favorites{' '}
        <span
          aria-live="polite"
          aria-atomic="true"
          className="py-1 px-2 rounded bg-secondary dark:bg-secondary-dark ml-auto transition-colors"
        >
          {count}
        </span>
      </Link>
    )
  }

  return (
    <Link
      to={PATHNAMES.FAVORITES}
      className="relative w-10 h-10 bg-primary dark:bg-primary-dark transition-colors p-2 rounded flex items-center justify-center animate-fade-left"
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
          className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center rounded-full bg-accent dark:bg-accent-dark text-background dark:text-background-dark text-xs font-semibold min-w-[18px] h-5 px-1 leading-none select-none transition-colors"
        >
          {count}
        </span>
      )}
    </Link>
  )
}
