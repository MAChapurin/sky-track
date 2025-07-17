import { useRef, useEffect, type FC } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Polyline
} from 'react-leaflet'
import L, { Map as LeafletMap } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useAppSelector } from '@/shared/hooks'
import { CalculateCenterMapByCoords } from '../utils'
import { Icon } from '@/shared/ui'
import ReactDOMServer from 'react-dom/server'

const iconHtml = ReactDOMServer.renderToStaticMarkup(
  <Icon name="location" className="text-white -translate-y-1/2" />
)

const customIcon = L.divIcon({
  html: `<div>${iconHtml}</div>`,
  className: '',
  iconSize: [24, 24]
})

const MapUpdater: FC<{
  coords: [number, number]
  onMapReady: (map: LeafletMap) => void
}> = ({ coords, onMapReady }) => {
  const map = useMap()

  useEffect(() => {
    if (map) {
      onMapReady(map)
    }
  }, [map])

  useEffect(() => {
    if (map) {
      map.flyTo(coords, 5, { duration: 1.5 })
    }
  }, [coords])

  return null
}

export const BackgroundMap: React.FC = () => {
  const { from, to } = useAppSelector(state => state.worldMap)

  const center = CalculateCenterMapByCoords(from, to)

  const mapRef = useRef<LeafletMap | null>(null)

  const handleMapReady = (map: LeafletMap) => {
    mapRef.current = map
  }

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <MapContainer
        center={center}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
        <MapUpdater coords={center} onMapReady={handleMapReady} />

        {from && <Marker position={from} icon={customIcon} />}
        {to && <Marker position={to} icon={customIcon} />}

        {from && to && <Polyline positions={[from, to]} color="orange" />}
      </MapContainer>
    </div>
  )
}
