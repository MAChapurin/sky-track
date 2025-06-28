import { ScrollContainer } from "@/shared/ui/scroll-container";
import { FlightDetail, FlightList } from "@/widgets";

export function HomePage() {
  return (
    <main className="flex justify-between" role="main">
      <ScrollContainer>
        <FlightList />
      </ScrollContainer>
      <ScrollContainer>
        <FlightDetail />
      </ScrollContainer>
    </main>
  );
}
