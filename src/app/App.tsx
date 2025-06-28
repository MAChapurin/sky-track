import { BackgroundMap } from "@/components/BackgroundMap";
// import { MapWithCurrentLocation } from "@/components/MapWithCurrentLocation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen p-8">
      <BackgroundMap />
      <div className="max-w-480 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
