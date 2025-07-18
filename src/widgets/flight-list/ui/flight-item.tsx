import { setActiveFlight, setCenter } from '@/entities/map/model/map.slice'
import { getPointByProgress } from '@/entities/map/utils'
import { FavoritesButton } from '@/features/favorites-button/ui/favorites-button'
import { ProgressLine } from '@/features/progress-line'
import { KEY_BOARDS } from '@/shared/config'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import type { IFlight } from '@/shared/types'
import { HighlightMatch } from '@/shared/ui'
import { cn } from '@/shared/utils'
import { useNavigate } from 'react-router-dom'

export const FlightItem = ({
  item,
  query,
  airlineFilter
}: {
  item: IFlight
  query: string
  airlineFilter: string
}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { activeFlight } = useAppSelector(state => state.worldMap)

  const handlerFlightItem = () => {
    navigate(`?airline=${item.airline}`)
    dispatch(setActiveFlight(item.id))
    dispatch(
      setCenter(
        getPointByProgress(item.from.coords, item.to.coords, item.progress)
      )
    )
  }
  return (
    <article
      className={cn(
        'w-full min-h-50 rounded-2xl p-0.5',
        'cursor-pointer focus:outline-none',
        'overflow-hidden transition-colors',
        'bg-gradient-to-r from-transparent to-transparent',
        {
          ['from-[#E44948] to-[#FBA316]']: activeFlight === item.id
        }
      )}
      onClick={handlerFlightItem}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === KEY_BOARDS.Enter || e.key === KEY_BOARDS.Space) {
          handlerFlightItem()
        }
      }}
    >
      <div className="h-50 focus:outline-0 rounded-2xl flex flex-col justify-between text-foreground dark:text-foreground-dark bg-primary dark:bg-primary-dark p-4 transition-colors">
        <div className="flex items-center">
          <div className="flex items-center gap-2 mr-auto">
            <div className="w-8 h-8 rounded-4xl border-none overflow-clip bg-white">
              <img
                className="object-cover scale-101"
                src={item.logo}
                alt={item.airline}
              />
            </div>
            <div>
              <HighlightMatch item={item.airline} query={airlineFilter} />
            </div>
          </div>
          <div className="rounded-xl p-1 bg-secondary dark:bg-secondary-dark">
            {item.aircraftReg}
          </div>
        </div>
        <div
          className="w-fit ml-auto flex items-center justify-end"
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <FavoritesButton id={item.airline} />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-base">
              <HighlightMatch item={item.from?.city} query={query} />
            </div>
            <div className="text-5xl">{item.from.code}</div>
          </div>
          <ProgressLine progress={item.progress} />
          <div className="flex flex-col gap-2">
            <div className="text-base">{item.to.city}</div>
            <div className="text-5xl">{item.to.code}</div>
          </div>
        </div>
      </div>
    </article>
  )
}
