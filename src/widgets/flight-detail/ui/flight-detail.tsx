import { FLIGHTS } from "@/shared/db/fligths.data";
import { Icon } from "@/shared/ui/icon";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import type { IFlight } from "@/shared/types/flight.types";

export const FlightDetail = () => {
  const [targetFlight, setTargetFlight] = useState<IFlight>();

  const [searchParams] = useSearchParams();
  const targetAirline = FLIGHTS.find(
    (el) => el.airline === searchParams.get("airline")
  );

  const onTarget = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTargetFlight(targetAirline);
      });
    } else {
      setTargetFlight(targetAirline);
    }
  };

  useEffect(() => {
    onTarget();
  }, [targetAirline]);

  if (!targetFlight) return null;
  return (
    <div className="flex">
      {/* <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
        {JSON.stringify(targetFlight, null, 2)}
      </pre> */}
      <div className="w-130 h-fit rounded-2xl overflow-hidden sticky top-0 text-white">
        <div className="min-h-90 bg-gradient-to-r from-[#336699] to-[#8ABFFF] p-5">
          <div className="flex items-center justify-between bg-[#111111] p-5 rounded-2xl">
            <div className="flex flex-col">
              <div className="text-[#FBA316] text-[28px]">
                {targetFlight.airline}
              </div>
              <div className="text-xl">{targetFlight.airplane.name}</div>
            </div>
            <button className="w-10 h-10 flex items-center justify-center bg-[#FFFFFF1A] rounded-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1982 3.37705C15.5342 3.04111 16.0787 3.04111 16.4146 3.37705C16.7506 3.71299 16.7506 4.25752 16.4146 4.59346L11.1181 9.88919L16.4029 14.9783C16.745 15.3077 16.7556 15.8524 16.4264 16.1947C16.1174 16.5155 15.6194 16.5445 15.2764 16.2753L15.21 16.2182L9.90081 11.1064L4.80165 16.2064C4.46571 16.5424 3.92118 16.5424 3.58525 16.2064C3.24931 15.8705 3.24931 15.326 3.58525 14.99L8.66172 9.91271L3.59701 5.03533L3.53652 4.97064C3.25477 4.63813 3.26484 4.13974 3.57348 3.81892C3.88245 3.49808 4.38051 3.46907 4.72353 3.73828L4.78989 3.7954L9.87897 8.69547L15.1982 3.37705Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <img
            loading="lazy"
            src={targetFlight.airplane.image}
            alt={targetFlight.airplane.name}
            title={targetFlight.airplane.name}
          />
        </div>
        <div className="bg-[#111111] min-h-100 p-4">
          <div className="grid grid-cols-2 gap-1 relative mb-2.5">
            <Icon
              name="separatorPlane"
              className="absolute left-1/2 top-12 -translate-x-6"
            />
            <div className="flex flex-col items-center p-6 bg-[#1C1C1C] rounded-2xl">
              <div className="font-medium text-5xl">
                {targetFlight.from.code}
              </div>
              <div className="text-2xl">{targetFlight.from.city}</div>
              <div className="text-[#FFFFFF66] text-base">
                {targetFlight.from.timezone}
              </div>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#1C1C1C] rounded-2xl">
              <div className="font-medium text-5xl">{targetFlight.to.code}</div>
              <div className="text-2xl">{targetFlight.to.city}</div>
              <div className="text-[#FFFFFF66] text-base">
                {targetFlight.to.timezone}
              </div>
            </div>
            <div className="h-24 col-span-2 px-4 py-6 bg-[#1C1C1C] flex flex-col">
              <div className="w-full h-1 rounded-2xl flex relative">
                <div className="w-1/2 h-full bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l-2xl"></div>
                <div className="absolute -top-8 translate-y-full left-1/2 -translate-x-1/2">
                  <Icon name="plane" />
                </div>
                <div className="w-1/2 h-full bg-[#FFFFFF1A] rounded-r-2xl"></div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-[#FFFFFF66] text-xl">2 715 km · 3h 1m</div>
                <div className="text-[#FFFFFF66] text-xl">2 715 km · 3h 1m</div>
              </div>
            </div>
            <div className="h-16 flex items-center justify-between bg-[#1C1C1C] px-4 py-6">
              <div className="text-[#FFFFFF66] text-xl">Scheduletd</div>
              <time className="text-xl" dateTime="2025-06-24T08:15">
                8:15
              </time>
            </div>
            <div className="h-16 flex items-center justify-between bg-[#1C1C1C] px-4 py-6">
              <div className="text-[#FFFFFF66] text-xl">Actual</div>
              <time className="text-xl" dateTime="2025-06-24T08:24">
                8:24
              </time>
            </div>
            <div className="h-16 flex items-center justify-between bg-[#1C1C1C] px-4 py-6 rounded-bl-2xl">
              <div className="text-[#FFFFFF66] text-xl">Scheduletd</div>
              <time className="text-xl" dateTime="2025-06-24T13:25">
                13:25
              </time>
            </div>
            <div className="h-16 flex items-center justify-between bg-[#1C1C1C] px-4 py-6 rounded-br-2xl">
              <div className="text-[#FFFFFF66] text-xl">Estimated</div>
              <time className="text-xl" dateTime="2025-06-24T08:15">
                13:23
              </time>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 relative mb-2.5">
            <div className="col-span-2 bg-[#FFFFFF1A] p-4 rounded-tl-2xl">
              <h3 className="text-xl">Flight information</h3>
            </div>
            <div className="h-16 flex items-center justify-between bg-[#1C1C1C] px-4 py-6">
              <time className="text-xl">Boeing 737-800</time>
            </div>
            <div className="h-16 flex items-center justify-between bg-[#1C1C1C] px-4 py-6">
              <div className="text-xl">🇮🇪 Ireland</div>
            </div>
            <div className="h-16 flex items-center justify-between bg-[#1C1C1C] px-4 py-6 rounded-bl-2xl">
              <div className="text-[#FFFFFF66] text-xl">Speed</div>
              <div className="text-xl">{targetFlight.route.speed} km/h</div>
            </div>
            <div className="h-16 flex items-center justify-between bg-[#1C1C1C] px-4 py-6 rounded-br-2xl">
              <div className="text-[#FFFFFF66] text-xl">Altitude</div>
              <div className="text-xl">{targetFlight.route.altitude} m</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-[#1C1C1C] rounded-l-2xl text-xl">
              <Icon name="route" />
              Route
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-[#1C1C1C] text-xl">
              <Icon name="follow" />
              Follow
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-[#1C1C1C] text-xl">
              <Icon name="shared" />
              Share
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-[#1C1C1C] rounded-r-2xl text-xl">
              <Icon name="more" />
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
