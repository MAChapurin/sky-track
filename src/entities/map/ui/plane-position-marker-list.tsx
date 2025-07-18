import { Marker, Polyline, Tooltip } from 'react-leaflet'
import { useAppSelector } from '@/shared/hooks'
import { type FC } from 'react'
import type { PlanePositionMarkerListProps } from '../types'
import { locationIcon } from './location-icon'
import { getPointByProgress } from '../utils'
import { PlanePositionMarker } from './plane-position-marker'

export const PlanePositionMarkerList: FC<PlanePositionMarkerListProps> = ({
  list
}) => {
  const { activeFlight } = useAppSelector(state => state.worldMap)
  return list.map(flight => {
    const isVisible = flight.id === activeFlight
    const position = getPointByProgress(
      flight.from.coords,
      flight.to.coords,
      flight.progress
    )
    return (
      <div key={flight.id}>
        {isVisible ? (
          <>
            <Marker position={flight.from.coords} icon={locationIcon}>
              <Tooltip direction={'top'} offset={[0, -10]}>
                {flight.from.city}
              </Tooltip>
            </Marker>
            <Polyline
              positions={[flight.from.coords, position]}
              color="orange"
            />
            <Marker position={flight.to.coords} icon={locationIcon}>
              <Tooltip direction={'top'} offset={[0, -10]}>
                {flight.to.city}
              </Tooltip>
            </Marker>
            <PlanePositionMarker flight={flight} />
            <Polyline
              positions={[position, flight.to.coords]}
              color="white"
              dashArray="10 10"
            />
          </>
        ) : (
          <PlanePositionMarker flight={flight} opacity={0.5} />
        )}
      </div>
    )
  })
}
