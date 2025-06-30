import { ScrollContainer } from "@/shared/ui/scroll-container";
import { FlightDetail, FlightList } from "@/widgets";

export function HomePage() {
  return (
    <main
      className="w-full h-full flex justify-center lg:justify-between"
      role="main"
    >
      <ScrollContainer className="w-full flex justify-center lg:w-fit lg:block">
        <FlightList />
      </ScrollContainer>
      <FlightDetail />
    </main>
  );
}
