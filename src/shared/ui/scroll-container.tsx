import { cn } from "../utils/cn";

type ScrollContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const ScrollContainer = ({
  className,
  children,
  ...props
}: ScrollContainerProps) => {
  return (
    <div
      className={cn(
        "h-screen overflow-y-auto overscroll-contain py-8",
        "scrollbar-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
