import { PATHNAMES } from '@/shared/config'
import { useAppSelector } from '@/shared/hooks'
import { Icon } from '@/shared/ui'
import { Link } from 'react-router-dom'

export const FavoritesLink = () => {
  const { favorites } = useAppSelector(state => state.favoritesReducer)
  return (
    <Link
      className="w-10 h-10 bg-primary dark:bg-primary-dark transition-colors p-2 rounded flex flex-col items-center justify-center animate-fade-left"
      to={PATHNAMES.FAVORITES}
    >
      <Icon
        name="favorites"
        className="transition-colors text-foreground dark:text-foreground-dark"
      />
      {favorites.length}
    </Link>
  )
}
