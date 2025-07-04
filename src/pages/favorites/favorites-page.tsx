import { FlightDetail, FlightList } from '@/widgets'

export const FavoritesPage = () => {
  return (
    <main className="w-full h-full grid grid-cols-1 lg:grid-cols-3" role="main">
      <h1 className="col-span-3">Favorites</h1>
      <FlightList />
      <FlightDetail />
    </main>
  )
}
