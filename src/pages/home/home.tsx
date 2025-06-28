import { FlightList } from "@/widgets";
import { FlightDetail } from "@/widgets/flight-detail";

export function HomePage() {
  return (
    <main className="flex justify-between">
      <FlightList />
      <FlightDetail />
    </main>
  );
}
