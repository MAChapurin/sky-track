import { FLIGHTS } from "@/shared/db/fligths.data";
import { PlaneIcon } from "@/shared/ui/icons/plane-icon";
import { Link } from "react-router-dom";

export const FlightList = () => {
  return (
    // <div className="">
    <ul className="flex flex-col gap-4 w-full max-w-100">
      {FLIGHTS.map((el) => {
        return (
          <li key={el.airline} className="">
            <div className="w-full min-h-50 rounded-2xl focus-within:p-[2px] p-0.5 focus-within:bg-gradient-to-r focus-within:from-[#E44948] focus-within:to-[#FBA316] inline-block overflow-hidden transition-colors">
              <Link
                to={"?airline=" + el.airline}
                className="h-50 focus:outline-0 rounded-2xl flex flex-col text-white bg-gray-900 p-4 gap-9"
              >
                <div className="flex items-center mb-auto">
                  <div className="flex items-center gap-2 mr-auto">
                    <div className="w-8 h-8 rounded-4xl border-none overflow-clip bg-white">
                      <img
                        className="object-cover scale-101"
                        src={el.logo}
                        alt={el.airline}
                      />
                    </div>
                    <div>{el.airline}</div>
                  </div>
                  <div className="rounded-xl p-1 bg-gray-700 mr-4">93247</div>
                  <div className="rounded-xl p-1 bg-gray-700">
                    {el.aircraftReg}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <div>{el.from.city}</div>
                    <div>{el.from.code}</div>
                  </div>
                  <div className="w-full h-1 rounded-2xl flex relative">
                    <div className="w-1/2 h-full bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l-2xl"></div>
                    <div className="absolute -top-8 translate-y-full left-1/2 -translate-x-1/2">
                      <PlaneIcon />
                    </div>
                    <div className="w-1/2 h-full bg-[#FFFFFF1A] rounded-r-2xl"></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>{el.to.city}</div>
                    <div>{el.to.code}</div>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>

    // </div>
  );
};
{
  /* <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm">
        {JSON.stringify(FLIGHTS, null, 2)}
      </pre> */
}
