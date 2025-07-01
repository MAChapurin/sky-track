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
        "max-h-full overflow-y-auto overscroll-contain snap-y snap-mandatory",
        "scrollbar-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
