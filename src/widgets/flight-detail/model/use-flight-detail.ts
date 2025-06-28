import { FLIGHTS } from "@/shared/db/fligths.data";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import type { IFlight } from "@/shared/types/flight.types";
import { SEARCH_PARAMS } from "@/shared/config";

export const useFlightDetail = () => {
  const [targetFlight, setTargetFlight] = useState<IFlight>();

  const [searchParams, setSearchParams] = useSearchParams();
  const targetAirline = FLIGHTS.find(
    (el) => el.airline === searchParams.get(SEARCH_PARAMS.AIRLINE)
  );

  const onTarget = useCallback(() => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTargetFlight(targetAirline);
      });
    } else {
      setTargetFlight(targetAirline);
    }
  }, [targetAirline]);

  const onClose = () => {
    setSearchParams((searchParams) => {
      searchParams.delete(SEARCH_PARAMS.AIRLINE);
      return searchParams;
    });
  };

  useEffect(() => {
    onTarget();
  }, [onTarget, targetAirline]);

  return {
    onClose,
    targetFlight,
  };
};
