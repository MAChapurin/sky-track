import { useEffect, type FC } from 'react'
import { useMap } from 'react-leaflet'
import { Map as LeafletMap } from 'leaflet'

export const MapUpdater: FC<{
  coords: [number, number]
  onMapReady: (map: LeafletMap) => void
}> = ({ coords, onMapReady }) => {
  const map = useMap()

  useEffect(() => {
    if (map) {
      onMapReady(map)
    }
  }, [map, onMapReady])

  useEffect(() => {
    if (map) {
      map.flyTo(coords, 5, { duration: 1.5 })
    }
  }, [coords, map])

  return null
}
