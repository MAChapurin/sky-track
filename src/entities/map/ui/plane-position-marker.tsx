import { Icon } from '@/shared/ui'
import ReactDOMServer from 'react-dom/server'
import L from 'leaflet'
import { Marker, Tooltip } from 'react-leaflet'
import type { IFlight } from '@/shared/types'
import { usePlanePosition } from '../hooks'

export const PlanePositionMarker = ({
  flight,
  opacity = 1
}: {
  flight: IFlight
  opacity?: number
}) => {
  const { angle, handlerFlightItem, position } = usePlanePosition(flight)

  const iconPlaneHtml = ReactDOMServer.renderToStaticMarkup(
    <Icon
      name="plane"
      className="text-black dark:text-white"
      style={{ transform: `rotate(${angle}deg)` }}
    />
  )

  const customPlaneIcon = L.divIcon({
    html: `<div>${iconPlaneHtml}</div>`,
    className: '',
    iconSize: [24, 24]
  })

  return (
    <Marker
      position={position}
      icon={customPlaneIcon}
      opacity={opacity}
      eventHandlers={{
        click: handlerFlightItem
      }}
    >
      <Tooltip direction={'top'} offset={[0, -10]}>
        {flight.airline}
      </Tooltip>
    </Marker>
  )
}
