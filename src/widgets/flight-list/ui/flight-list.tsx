import { useNavigate, useSearchParams } from 'react-router-dom'
import { FavoritesButton } from '@/features/favorites-button/ui/favorites-button'
import { PlaneIcon } from '@/shared/ui/icons/plane-icon'
import { SEARCH_FLIGHTS_VALUES } from '@/shared/db/fligths.data'
import { LiveSearch } from '@/features/live-search/ui/live-search'
import { HighlightMatch, ScrollContainer } from '@/shared/ui'
import { KEY_BOARDS, SEARCH_PARAMS } from '@/shared/config'
import type { IFlight } from '@/shared/types'

export const FlightList = ({ list }: { list: IFlight[] }) => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const filterValue =
    searchParams.get(SEARCH_PARAMS.SEARCH)?.toLowerCase() ?? ''

  const filteredFlights = filterValue
    ? list.filter(flight =>
        flight.from?.city.toLowerCase().includes(filterValue)
      )
    : list

  return (
    <ScrollContainer className="w-full md:flex-row-reverse md:justify-end md:flex gap-4 relative lg:col-span-2">
      <div className="sticky top-0 snap-start z-10 shrink-0 mb-8">
        <LiveSearch items={SEARCH_FLIGHTS_VALUES.map(el => el.label)} />
      </div>
      <ul
        role="list"
        className="flex flex-col gap-4 w-full lg:w-100 h-fit mb-8"
      >
        {filteredFlights.map((el, i) => (
          <li
            key={el.airline}
            className="snap-start animate-fade-up"
            style={{ animationDelay: `${50 * i}ms` }}
          >
            <article
              className="w-full min-h-50 rounded-2xl cursor-pointer focus-within:p-0.5 p-0.5 focus:outline-0 focus-within:bg-gradient-to-r focus-within:from-[#E44948] focus-within:to-[#FBA316] overflow-hidden transition-colors"
              onClick={() => navigate(`?airline=${el.airline}`)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === KEY_BOARDS.Enter || e.key === KEY_BOARDS.Space) {
                  navigate(`?airline=${el.airline}`)
                }
              }}
            >
              <div className="h-50 focus:outline-0 rounded-2xl flex flex-col justify-between text-foreground dark:text-foreground-dark bg-primary dark:bg-primary-dark p-4 transition-colors">
                <div className="flex items-center">
                  <div className="flex items-center gap-2 mr-auto">
                    <div className="w-8 h-8 rounded-4xl border-none overflow-clip bg-white">
                      <img
                        className="object-cover scale-101"
                        src={el.logo}
                        alt={el.airline}
                      />
                    </div>
                    <div>{el.airline}</div>
                  </div>
                  <div className="rounded-xl p-1 bg-secondary dark:bg-secondary-dark">
                    {el.aircraftReg}
                  </div>
                </div>
                <div
                  className="w-fit ml-auto flex items-center justify-end"
                  onClick={e => {
                    e.stopPropagation()
                  }}
                >
                  <FavoritesButton id={el.airline} />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-base">
                      <HighlightMatch
                        item={el.from?.city}
                        query={filterValue}
                      />
                    </div>
                    <div className="text-5xl">{el.from.code}</div>
                  </div>
                  <div className="w-full h-1 rounded-2xl flex relative">
                    <div className="w-1/2 h-full bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l-2xl"></div>
                    <div className="absolute -top-8 translate-y-full left-1/2 -translate-x-1/2">
                      <PlaneIcon />
                    </div>
                    <div className="w-1/2 h-full bg-secondary dark:bg-secondary-dark rounded-r-2xl transition-colors"></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-base">{el.to.city}</div>
                    <div className="text-5xl">{el.to.code}</div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </ScrollContainer>
  )
}
