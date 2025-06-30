import { Outlet } from "react-router-dom";
import { BackgroundMap, Controls } from "@/widgets";

function App() {
  return (
    <div className="w-screen h-[100dvh] min-w-80">
      <Controls />
      <BackgroundMap />
      <div className="max-w-480 mx-auto w-full h-[100dvh] px-2 md:px-4 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
