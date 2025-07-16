import { useState, useRef, useEffect, type FC } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L, { Map as LeafletMap } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useSwithTheme } from '@/features/theme-swither/model/use-switcher'
import { THEME_MODE } from '@/features/theme-swither/constants'

const customIcon = new L.Icon({
  iconUrl: 'plane.png',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -10]
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
      map.flyTo(coords, 12, { duration: 1.5 })
    }
  }, [coords])

  return null
}

export const BackgroundMap: React.FC = () => {
  const [coords, setCoords] = useState<[number, number]>([55.4146, 37.9063])

  const mapRef = useRef<LeafletMap | null>(null)

  const { theme } = useSwithTheme()
  const isDarkTheme = theme === THEME_MODE.DARK

  const handleFlyToBerlin = () => {
    const newCoords: [number, number] = [52.52, 13.405]
    setCoords(newCoords)
  }

  const handleMapReady = (map: LeafletMap) => {
    mapRef.current = map
  }

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <MapContainer
        center={coords}
        zoom={4}
        style={{ height: '100%', width: '100%' }}
      >
        {isDarkTheme ? (
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          />
        ) : (
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            attribution="Map data &copy; Google"
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          />
        )}
        <MapUpdater coords={coords} onMapReady={handleMapReady} />

        <Marker position={coords} icon={customIcon}>
          <Popup>Hello from Moscow!</Popup>
        </Marker>
      </MapContainer>

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 1000
        }}
      >
        <button onClick={handleFlyToBerlin} className="bg-white w-40 h-10">
          Test
        </button>
      </div>
    </div>
  )
}
