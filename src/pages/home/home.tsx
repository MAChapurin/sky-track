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
      <ScrollContainer className="fixed top-0 left-0 lg:relative">
        <FlightDetail />
      </ScrollContainer>
    </main>
  );
}
