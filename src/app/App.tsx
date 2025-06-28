import { Outlet } from "react-router-dom";
import { BackgroundMap, Controls } from "@/widgets";

function App() {
  return (
    <div className="w-screen h-screen">
      <Controls />
      <BackgroundMap />
      <div className="max-w-480 mx-auto w-full h-full px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
