import { FlightDetail, FlightList } from '@/widgets'

export function HomePage() {
  return (
    <main className="w-full h-full grid grid-cols-1 lg:grid-cols-3" role="main">
      <FlightList />
      <FlightDetail />
    </main>
  )
}
