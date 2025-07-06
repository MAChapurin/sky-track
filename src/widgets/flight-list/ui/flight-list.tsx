import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SEARCH_FLIGHTS_VALUES } from '@/shared/db/fligths.data'
import { SEARCH_PARAMS } from '@/shared/config'

import { LiveSearch } from '@/features/live-search/ui/live-search'
import { ScrollContainer } from '@/shared/ui'
import { FlightItem } from './flight-item'

import type { IFlight } from '@/shared/types'

interface FlightListProps {
  list: IFlight[]
}

export const FlightList = ({ list }: FlightListProps) => {
  const [searchParams] = useSearchParams()

  const filterValue = useMemo(
    () => searchParams.get(SEARCH_PARAMS.SEARCH)?.toLowerCase() ?? '',
    [searchParams]
  )

  const filteredFlights = useMemo(() => {
    return filterValue
      ? list.filter(flight =>
          flight.from?.city.toLowerCase().includes(filterValue)
        )
      : list
  }, [list, filterValue])

  const searchOptions = useMemo(
    () => SEARCH_FLIGHTS_VALUES.map(el => el.label),
    []
  )

  return (
    <ScrollContainer className="w-full md:flex-row-reverse md:justify-end md:flex gap-4 relative lg:col-span-2">
      <div className="sticky top-0 snap-start z-10 shrink-0 mb-8">
        <LiveSearch items={searchOptions} />
      </div>

      <ul
        role="list"
        aria-label="Filtered flights"
        className="flex flex-col gap-4 w-full lg:w-100 h-fit mb-8"
      >
        {filteredFlights.map((flight, index) => (
          <li
            key={flight.airline}
            className="snap-start animate-fade-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <FlightItem item={flight} query={filterValue} />
          </li>
        ))}
      </ul>
    </ScrollContainer>
  )
}
