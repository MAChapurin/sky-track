import type { IFlight } from '@/shared/types'

export type Coordinates = [number, number]

export interface MapState {
  activeFlight: string | null
  center: Coordinates
}

export interface PlanePositionMarkerListProps {
  list: IFlight[]
}
