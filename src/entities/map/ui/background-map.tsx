import { useCallback, useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Map as LeafletMap } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useAppSelector } from '@/shared/hooks'
import { MapUpdater } from './map-updater'
import { PlanePositionMarkerList } from './plane-position-marker-list'
import { FLIGHTS } from '@/shared/db/fligths.data'
import { useSwithTheme } from '@/features/theme-swither/model/use-switcher'
import { THEME_MODE } from '@/features/theme-swither/constants'
import { ErrorMapWidget } from './error-map-widget'

export const BackgroundMap: React.FC = () => {
  const { center } = useAppSelector(state => state.worldMap)
  const { theme } = useSwithTheme()
  const isDark = theme === THEME_MODE.DARK

  const mapRef = useRef<LeafletMap | null>(null)
  const [tileError, setTileError] = useState(false)

  const handleMapReady = useCallback((map: LeafletMap) => {
    mapRef.current = map
  }, [])

  useEffect(() => {
    setTileError(false)
  }, [isDark])

  return (
    <div className="relative w-full h-screen">
      {tileError && <ErrorMapWidget />}
      <MapContainer
        center={center}
        zoom={8}
        style={{
          height: '100%',
          width: '100%',
          background: isDark ? '#00000050' : '#ffffff10'
        }}
      >
        <MapUpdater coords={center} onMapReady={handleMapReady} />
        <TileLayer
          url={
            isDark
              ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
              : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          }
          eventHandlers={{
            tileerror: () => setTileError(true)
          }}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
        <PlanePositionMarkerList list={FLIGHTS} />
      </MapContainer>
    </div>
  )
}
