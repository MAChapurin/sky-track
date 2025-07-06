import { FLIGHTS } from '@/shared/db/fligths.data'
import { useAppSelector } from '@/shared/hooks'
import { FlightDetail, FlightList, NavError } from '@/widgets'

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(state => state.favorites)
  const list = FLIGHTS.filter(flight => favorites.includes(flight.airline))
  if (favorites.length === 0) {
    return (
      <main className="h-full w-full flex items-center justify-center flex-col text-foreground dark:text-foreground-dark">
        <div className="w-full flex items-stretch justify-center flex-col gap-1 p-4 bg-background dark:bg-background-dark transition-colors rounded-2xl animate-fade-up animate-once">
          <h1 className="p-4 text-balance rounded-t-2xl text-4xl font-bold bg-secondary dark:bg-secondary-dark transition-colors animate-fade-up animate-delay-100">
            Favorites
          </h1>
          <div className="grid grid-cols-2 gap-1 animate-fade-up animate-delay-150">
            <p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-4">
              Status:
            </p>
            <p className="text-lg text-center bg-primary dark:bg-primary-dark transition-colors p-4">
              You have no flights added to your favorites.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 animate-fade-up animate-delay-200">
            <p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors mb-4 p-4 rounded-bl-2xl">
              Recommendation:
            </p>
            <p className="text-lg text-center bg-primary dark:bg-primary-dark transition-colors mb-4 p-4 rounded-br-2xl">
              You can return to the main or previous page. Then add flight to
              your favorite list if you should.
            </p>
          </div>
          <NavError />
        </div>
      </main>
    )
  }
  return (
    <main className="w-full h-full grid grid-cols-1 lg:grid-cols-3" role="main">
      <FlightList list={list} />
      <FlightDetail />
    </main>
  )
}
