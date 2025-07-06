import { FavoritesButton } from '@/features/favorites-button/ui/favorites-button'
import { ProgressLine } from '@/features/progress-line'
import { KEY_BOARDS } from '@/shared/config'
import type { IFlight } from '@/shared/types'
import { HighlightMatch } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'

export const FlightItem = ({
  item,
  query
}: {
  item: IFlight
  query: string
}) => {
  const navigate = useNavigate()
  return (
    <article
      className="w-full min-h-50 rounded-2xl cursor-pointer focus-within:p-0.5 p-0.5 focus:outline-0 focus-within:bg-gradient-to-r focus-within:outline-none focus:outline-none focus-within:from-[#E44948] focus-within:to-[#FBA316] overflow-hidden transition-colors"
      onClick={() => navigate(`?airline=${item.airline}`)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === KEY_BOARDS.Enter || e.key === KEY_BOARDS.Space) {
          navigate(`?airline=${item.airline}`)
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
            <div>{item.airline}</div>
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
