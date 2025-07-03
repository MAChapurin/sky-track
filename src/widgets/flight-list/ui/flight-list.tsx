import { LiveSearch } from '@/features/live-search/ui/live-search'
import { SEARCH_PARAMS } from '@/shared/config'
import { FLIGHTS, SEARCH_FLIGHTS_VALUES } from '@/shared/db/fligths.data'
import { ScrollContainer } from '@/shared/ui'
import { PlaneIcon } from '@/shared/ui/icons/plane-icon'
import { Link, useSearchParams } from 'react-router-dom'

export const FlightList = () => {
  const [searchParams] = useSearchParams()
  const filterValue =
    searchParams.get(SEARCH_PARAMS.SEARCH)?.toLowerCase() ?? ''

  const filteredFlights = filterValue
    ? FLIGHTS.filter(flight =>
        flight.from?.city.toLowerCase().includes(filterValue)
      )
    : FLIGHTS

  return (
    <ScrollContainer className="w-full md:flex-row-reverse md:justify-end md:flex gap-4 relative lg:col-span-2">
      <div className="sticky top-0 snap-start z-10 shrink-0 mb-8">
        <LiveSearch items={SEARCH_FLIGHTS_VALUES.map(el => el.label)} />
      </div>
      <ul className="flex flex-col gap-4 w-full lg:w-100 h-fit mb-8">
        {filteredFlights.map(el => (
          <li key={el.airline} className="snap-start">
            <div className="w-full min-h-50 rounded-2xl focus-within:p-0.5 p-0.5 focus-within:bg-gradient-to-r focus-within:from-[#E44948] focus-within:to-[#FBA316] overflow-hidden transition-colors">
              <Link
                to={'?airline=' + el.airline}
                className="h-50 focus:outline-0 rounded-2xl flex flex-col text-foreground dark:text-foreground-dark bg-primary dark:bg-primary-dark p-4 gap-9 transition-colors"
              >
                <div className="flex items-center mb-auto">
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
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-base">{el.from.city}</div>
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
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </ScrollContainer>
  )
}
