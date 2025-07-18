import type { Percent } from '@/shared/types'
import type { Coordinates } from '../types'

export const getCenterMapByCoords = (
  from: Coordinates | null,
  to: Coordinates | null
): Coordinates => {
  if (!from || !to) return [55.4146, 37.9063] //Moscow
  const [x1, y1] = from
  const [x2, y2] = to

  return [(x1 + x2) / 2, (y1 + y2) / 2]
}

//=====================================================================

export function getDirection(
  from: Coordinates,
  to: Coordinates,
  offset = 0
): number {
  const [lat1, lng1] = from
  const [lat2, lng2] = to

  const deltaLng = lng2 - lng1
  const deltaLat = lat2 - lat1

  const angleRad = Math.atan2(deltaLng, deltaLat)
  let angleDeg = (angleRad * 180) / Math.PI

  angleDeg += offset

  return angleDeg
}

//=====================================================================

export function getPointByProgress(
  from: Coordinates,
  to: Coordinates,
  progress: Percent
): Coordinates {
  const clampedProgress = Math.max(0, Math.min(progress, 100)) / 100

  const lat = from[0] + (to[0] - from[0]) * clampedProgress
  const lng = from[1] + (to[1] - from[1]) * clampedProgress

  return [lat, lng]
}
