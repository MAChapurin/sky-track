import { useEffect, useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { FilterCombobox } from '@/features'

import {
  AIRLINE_FLIGHTS_VALUES,
  SEARCH_FLIGHTS_VALUES
} from '@/shared/db/fligths.data'
import { SEARCH_PARAMS } from '@/shared/config'
import type { IFlight } from '@/shared/types'
import { ScrollContainer } from '@/shared/ui'

import { FlightItem } from './flight-item'
import { FlightItemSkeleton } from './flight-item-skeleton'
import { NotFoundFlightsAlert } from './not-found-alert'

interface FlightListProps {
  list: IFlight[]
}

const searchOptions = SEARCH_FLIGHTS_VALUES.map(el => el.label)
const searchAirline = AIRLINE_FLIGHTS_VALUES.map(el => el.label)

export const FlightList = ({ list }: FlightListProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams()

  const filterValue = useMemo(
    () => searchParams.get(SEARCH_PARAMS.SEARCH)?.toLowerCase() ?? '',
    [searchParams]
  )

  const airlineFilter = useMemo(
    () =>
      searchParams.get(SEARCH_PARAMS.SEARCH_BY_AIRLINE)?.toLowerCase() ?? '',
    [searchParams]
  )

  const filteredFlights = useMemo(() => {
    return list.filter(flight => {
      const matchesSearch =
        !filterValue || flight.from?.city.toLowerCase().includes(filterValue)

      const matchesAirline =
        !airlineFilter || flight.airline?.toLowerCase().includes(airlineFilter)

      return matchesSearch && matchesAirline
    })
  }, [list, filterValue, airlineFilter])

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <ScrollContainer className="w-full md:flex-row-reverse md:justify-end md:flex gap-4 relative lg:col-span-2 z-1 pointer-events-none">
      <div className="sticky top-0 snap-start z-10 mb-8 pointer-events-auto h-fit">
        <FilterCombobox
          items={searchOptions}
          title="from city"
          param={SEARCH_PARAMS.SEARCH}
        />
        <FilterCombobox
          items={searchAirline}
          title="by airline"
          param={SEARCH_PARAMS.SEARCH_BY_AIRLINE}
        />
      </div>

      <ul
        role="list"
        aria-label="Filtered flights"
        className="flex flex-col gap-4 w-full lg:w-100 h-fit mb-8 pointer-events-auto"
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
                <FlightItem
                  item={flight}
                  query={filterValue}
                  airlineFilter={airlineFilter}
                />
              </li>
            ))}
        {!isLoading && filteredFlights.length === 0 && (
          <li key={'not-found-key'} className="snap-start animate-fade">
            <NotFoundFlightsAlert />
          </li>
        )}
      </ul>
    </ScrollContainer>
  )
}
