import { useEffect, useState } from "react";

export function useScrollPosition(ref: React.RefObject<HTMLElement>) {
  const [scrollPosition, setScrollPosition] = useState({
    scrollTop: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      setScrollPosition({
        scrollTop: el.scrollTop,
        scrollLeft: el.scrollLeft,
      });
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return scrollPosition;
}
