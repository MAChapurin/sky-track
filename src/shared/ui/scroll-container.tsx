import { useRef } from "react";
import { cn } from "../utils/cn";

type ScrollContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const ScrollContainer = ({
  className,
  children,
  ...props
}: ScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  return (
    <div
      ref={containerRef}
      className={cn(
        "h-screen overflow-y-auto overscroll-contain pb-8 snap-y snap-mandatory mt-8 relative",
        "scrollbar-none",
        "shadow-inner-top",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 h-[1px] w-full shadow-2xl z-10"></div>
      {children}
    </div>
  );
};
