import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FLIGHTS } from "@/shared/db/fligths.data";
import { SEARCH_PARAMS } from "@/shared/config";
import type { IFlight } from "@/shared/types/flight.types";

export const useFlightDetail = () => {
  const [targetFlight, setTargetFlight] = useState<IFlight>();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const airlineParam = searchParams.get(SEARCH_PARAMS.AIRLINE);

  const targetAirline = useMemo(
    () => FLIGHTS.find((el) => el.airline === airlineParam),
    [airlineParam]
  );

  const cleanup = useCallback(() => {
    setTargetFlight(undefined);
    setSearchParams((params) => {
      params.delete(SEARCH_PARAMS.AIRLINE);
      return params;
    });
  }, [setSearchParams]);

  const closeWithAnimation = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    el.style.transition = "transform 0.3s ease";
    el.style.transform = "translateX(100%)";

    const onTransitionEnd = () => {
      el.removeEventListener("transitionend", onTransitionEnd);
      cleanup();
      setIsVisible(false);
      if (el) {
        el.style.transition = "";
        el.style.transform = "";
      }
    };

    el.addEventListener("transitionend", onTransitionEnd);
  }, [cleanup]);

  useEffect(() => {
    if (targetAirline) {
      setTargetFlight(targetAirline);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [targetAirline]);

  return {
    targetFlight,
    isVisible,
    containerRef,
    closeWithAnimation,
  };
};
