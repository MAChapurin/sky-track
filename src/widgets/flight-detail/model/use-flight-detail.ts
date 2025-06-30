import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FLIGHTS } from "@/shared/db/fligths.data";
import { SEARCH_PARAMS } from "@/shared/config";
import type { IFlight } from "@/shared/types/flight.types";

const SWIPE_THRESHOLD = 100;

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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const onPointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest("[data-ignore-swipe]")) {
        return;
      }
      startX = e.clientX;
      isDragging = true;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      currentX = e.clientX;
      const delta = currentX - startX;

      if (delta > 0) {
        el.style.transform = `translateX(${delta}px)`;
        el.style.transition = "none";
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      el.releasePointerCapture(e.pointerId);

      const delta = currentX - startX;

      if (delta > SWIPE_THRESHOLD) {
        closeWithAnimation();
      } else {
        el.style.transition = "transform 0.2s ease";
        el.style.transform = "translateX(0)";
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("pointerleave", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("pointerleave", onPointerUp);
    };
  }, [closeWithAnimation]);

  return {
    targetFlight,
    isVisible,
    containerRef,
    closeWithAnimation,
  };
};
