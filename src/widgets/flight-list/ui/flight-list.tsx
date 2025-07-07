import { useEffect, useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SEARCH_FLIGHTS_VALUES } from '@/shared/db/fligths.data'
import { SEARCH_PARAMS } from '@/shared/config'

import { LiveSearch } from '@/features/live-search/ui/live-search'
import { ScrollContainer } from '@/shared/ui'
import { FlightItem } from './flight-item'
import { FlightItemSkeleton } from './flight-item-skeleton'

import type { IFlight } from '@/shared/types'

interface FlightListProps {
  list: IFlight[]
}

const searchOptions = SEARCH_FLIGHTS_VALUES.map(el => el.label)

export const FlightList = ({ list }: FlightListProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams()

  const filterValue = useMemo(
    () => searchParams.get(SEARCH_PARAMS.SEARCH)?.toLowerCase() ?? '',
    [searchParams]
  )

  const filteredFlights = useMemo(() => {
    if (!filterValue) return list
    return list.filter(flight =>
      flight.from?.city.toLowerCase().includes(filterValue)
    )
  }, [list, filterValue])

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [])

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
        {isLoading
          ? Array.from({ length: list.length }).map((_, i) => (
              <FlightItemSkeleton key={i} />
            ))
          : filteredFlights.map((flight, index) => (
              <li
                key={flight.airline}
                className="snap-start animate-fade"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <FlightItem item={flight} query={filterValue} />
              </li>
            ))}
      </ul>
    </ScrollContainer>
  )
}
