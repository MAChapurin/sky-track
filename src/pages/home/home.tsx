import { FlightDetail, FlightList } from "@/widgets";

export function HomePage() {
  return (
    <main className="flex justify-between" role="main">
      <FlightList />
      <FlightDetail />
    </main>
  );
}
