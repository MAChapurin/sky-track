import { FlightDetail, FlightList } from '@/widgets'

export function HomePage() {
  return (
    <main className="w-full h-full grid grid-cols-1 md:grid-cols-2" role="main">
      <FlightList />
      <FlightDetail />
    </main>
  )
}
