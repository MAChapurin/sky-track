export type Coordinates = [number, number]

export interface MapState {
  from: Coordinates | null
  to: Coordinates | null
}
