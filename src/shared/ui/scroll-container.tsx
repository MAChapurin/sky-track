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
        "h-full overflow-y-auto overscroll-contain snap-y snap-mandatory relative",
        "scrollbar-none",
        "shadow-inner-top",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
