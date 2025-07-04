import { toogleFavoritesItem } from '@/entities/favorites'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/utils'

interface FavoritesButtonProps {
  id: string
}

export const FavoritesButton = ({ id }: FavoritesButtonProps) => {
  const dispatch = useAppDispatch()
  const { favorites } = useAppSelector(state => state.favoritesReducer)
  const isChecked = favorites.includes(id)

  const handleClick = () => {
    dispatch(toogleFavoritesItem(id))
  }

  return (
    <button
      type="button"
      aria-pressed={isChecked}
      aria-label={isChecked ? 'Remove from favorites' : 'Add to favorites'}
      onClick={handleClick}
      className={cn(
        'transition-colors group p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
      )}
    >
      <Icon
        name="bookmark"
        fill={isChecked ? 'currentColor' : 'transparent'}
        className={cn(
          'transition-colors stroke-current',
          isChecked
            ? 'text-accent'
            : 'text-muted dark:text-muted-dark group-hover:text-accent'
        )}
      />
    </button>
  )
}
