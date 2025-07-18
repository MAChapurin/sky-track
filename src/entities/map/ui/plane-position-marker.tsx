import { getDirection, getPointByProgress } from '@/entities/map/utils'
import { Icon } from '@/shared/ui'
import ReactDOMServer from 'react-dom/server'
import L from 'leaflet'
import { Marker, Tooltip } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/shared/hooks'
import { setActiveFlight, setCenter } from '../model/map.slice'
import type { IFlight } from '@/shared/types'

const PLANE_ICON_OFFSET = -90

export const PlanePositionMarker = ({
  flight,
  opacity = 1
}: {
  flight: IFlight
  opacity?: number
}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const position = getPointByProgress(
    flight.from.coords,
    flight.to.coords,
    flight.progress
  )

  const handlerFlightItem = () => {
    navigate(`?airline=${flight.airline}`)
    dispatch(setActiveFlight(flight.id))
    dispatch(setCenter(position))
  }
  const angle = getDirection(
    flight.from.coords,
    flight.to.coords,
    PLANE_ICON_OFFSET
  )
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
