import type { Coordinates } from '../types'

export const CalculateCenterMapByCoords = (
  from: Coordinates | null,
  to: Coordinates | null
): [number, number] => {
  if (!from || !to) return [55.4146, 37.9063]
  const [x1, y1] = from
  const [x2, y2] = to

  return [(x1 + x2) / 2, (y1 + y2) / 2]
}
