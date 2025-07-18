export interface IFlightAirplane {
  image: string
  name: string
}

export interface IFlightRoute {
  speed: number
  altitude: number
}

export interface IFlightLocation {
  city: string
  country: string
  countryCode: string
  timezone: string
  code: string
  coords: [number, number]
}

export type BuildRange<
  N extends number,
  Result extends number[] = []
> = Result['length'] extends N
  ? Result[number] | N
  : BuildRange<N, [...Result, Result['length']]>

export type Percent = BuildRange<100>

export interface IFlight {
  id: string
  airplane: IFlightAirplane
  route: IFlightRoute
  logo: string
  colorGradient: [string, string]
  airline: string
  aircraftReg: string
  from: IFlightLocation
  to: IFlightLocation
  progress: Percent
}
