import type { IFlight } from '@/shared/types/flight.types'

export const FLIGHTS: IFlight[] = [
  {
    logo: '/logos/turkish.svg',
    airline: 'TK143',
    aircraftReg: 'TC-JFP',
    progress: 75,
    from: {
      city: 'Sofia',
      country: 'Bulgaria',
      countryCode: 'BG',
      timezone: 'UTC +3',
      code: 'SOF',
      coords: [42.6977, 23.3219]
    },
    to: {
      city: 'Beijing',
      country: 'China',
      countryCode: 'CN',
      timezone: 'UTC +8',
      code: 'PEK',
      coords: [39.9042, 116.4074]
    },
    airplane: {
      image: '/planes/turkish.png',
      name: 'Airbus A330'
    },
    colorGradient: ['#ffdede', '#ffbaba'],
    route: {
      speed: 870,
      altitude: 10600
    }
  },
  {
    logo: '/logos/ryanair.svg',
    airline: 'RN1782',
    aircraftReg: 'D-AISP',
    progress: 50,
    from: {
      city: 'Dublin',
      country: 'Ireland',
      countryCode: 'IE',
      timezone: 'UTC +1',
      code: 'DUB',
      coords: [53.3498, -6.2603]
    },
    to: {
      city: 'Larnaca',
      country: 'Cyprus',
      countryCode: 'CY',
      timezone: 'UTC +3',
      code: 'LCA',
      coords: [34.9167, 33.6233]
    },
    airplane: {
      image: '/planes/ryanair.png',
      name: 'Boeing 737-800'
    },
    colorGradient: ['#A1C6E1', '#88B5E0'],
    route: {
      speed: 840,
      altitude: 11200
    }
  },
  {
    logo: '/logos/s7.svg',
    airline: 'S7124',
    aircraftReg: 'RA-73415',
    progress: 40,
    from: {
      city: 'Nice',
      country: 'France',
      countryCode: 'FR',
      timezone: 'UTC +2',
      code: 'NCE',
      coords: [43.7102, 7.262]
    },
    to: {
      city: 'Tbilisi',
      country: 'Georgia',
      countryCode: 'GE',
      timezone: 'UTC +4',
      code: 'TBS',
      coords: [41.7151, 44.8271]
    },
    airplane: {
      image: '/planes/s7.png',
      name: 'Airbus A320neo'
    },
    colorGradient: ['#d6ffe5', '#96f2c1'],
    route: {
      speed: 860,
      altitude: 10900
    }
  },
  {
    logo: '/logos/swiss.svg',
    airline: 'LX318',
    aircraftReg: 'HB-JHK',
    progress: 80,
    from: {
      city: 'Porto',
      country: 'Portugal',
      countryCode: 'PT',
      timezone: 'UTC +1',
      code: 'OPO',
      coords: [41.1579, -8.6291]
    },
    to: {
      city: 'Baku',
      country: 'Azerbaijan',
      countryCode: 'AZ',
      timezone: 'UTC +4',
      code: 'GYD',
      coords: [40.4093, 49.8671]
    },
    airplane: {
      image: '/planes/swiss.png',
      name: 'Airbus A220-300'
    },
    colorGradient: ['#e6e6ff', '#a8b4ff'],
    route: {
      speed: 830,
      altitude: 10700
    }
  },
  {
    logo: '/logos/lufthansa.svg',
    airline: 'LH401',
    aircraftReg: 'D-AIXD',
    progress: 60,
    from: {
      city: 'Burgas',
      country: 'Bulgaria',
      countryCode: 'BG',
      timezone: 'UTC +3',
      code: 'BOJ',
      coords: [42.5048, 27.4716]
    },
    to: {
      city: 'Muscat',
      country: 'Oman',
      countryCode: 'OM',
      timezone: 'UTC +4',
      code: 'MCT',
      coords: [23.588, 58.3829]
    },
    airplane: {
      image: '/planes/lufthansa.png',
      name: 'Airbus A350-900'
    },
    colorGradient: ['#e5f2ff', '#9dd2f9'],
    route: {
      speed: 890,
      altitude: 11300
    }
  }
]

export const SEARCH_FLIGHTS_VALUES = [
  ...new Set(FLIGHTS.flatMap(flight => [flight.from?.city]).filter(Boolean))
].map((el, i) => {
  return { id: i, label: el }
})

export const AIRLINE_FLIGHTS_VALUES = [
  ...new Set(FLIGHTS.flatMap(flight => [flight.airline]).filter(Boolean))
].map((el, i) => {
  return { id: i, label: el }
})
