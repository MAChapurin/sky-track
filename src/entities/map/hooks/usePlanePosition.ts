import { getDirection, getPointByProgress } from '@/entities/map/utils'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/shared/hooks'
import { setActiveFlight, setCenter } from '../model/map.slice'
import type { IFlight } from '@/shared/types'
import { useCallback } from 'react'

const PLANE_ICON_OFFSET = -90

export const usePlanePosition = (flight: IFlight) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const position = getPointByProgress(
    flight.from.coords,
    flight.to.coords,
    flight.progress
  )

  const handlerFlightItem = useCallback(() => {
    navigate(`?airline=${flight.airline}`)
    dispatch(setActiveFlight(flight.id))
    dispatch(setCenter(position))
  }, [])

  const angle = getDirection(
    flight.from.coords,
    flight.to.coords,
    PLANE_ICON_OFFSET
  )

  return {
    angle,
    handlerFlightItem,
    position
  }
}
