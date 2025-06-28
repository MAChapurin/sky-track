import { Outlet } from "react-router-dom";
import { BackgroundMap, Controls } from "@/widgets";

function App() {
  return (
    <div className="w-screen h-screen p-8">
      <Controls />
      <BackgroundMap />
      <div className="max-w-480 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
