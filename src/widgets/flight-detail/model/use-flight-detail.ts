import { FLIGHTS } from "@/shared/db/fligths.data";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import type { IFlight } from "@/shared/types/flight.types";
import { SEARCH_PARAMS } from "@/shared/config";

export const useFlightDetail = () => {
  const [targetFlight, setTargetFlight] = useState<IFlight>();
  const [isVisible, setIsVisible] = useState(false);
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
    if (targetAirline) {
      setTimeout(() => {
        setIsVisible(true);
      }, 200);
    }
  }, [targetAirline]);

  const onClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSearchParams((searchParams) => {
        searchParams.delete(SEARCH_PARAMS.AIRLINE);
        return searchParams;
      });
    }, 200);
  };

  useEffect(() => {
    onTarget();
    if (!targetAirline) {
      setIsVisible(false);
    }
  }, [onTarget, targetAirline]);

  return {
    onClose,
    targetFlight,
    isVisible,
  };
};
