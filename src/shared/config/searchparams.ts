export const SEARCH_PARAMS = {
  AIRLINE: 'airline',
  SEARCH: 'search',
  SEARCH_BY_AIRLINE: 'search_by_airline',
  FROM_CITY: 'from_city'
} as const

export type SearchParamsValueType =
  (typeof SEARCH_PARAMS)[keyof typeof SEARCH_PARAMS]
