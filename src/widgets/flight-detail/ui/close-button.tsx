import { Icon } from "@/shared/ui/icon";
import { cn } from "@/shared/utils/cn";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      data-ignore-swipe
      className={cn(
        "w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-foreground relative z-10 bg-secondary dark:bg-secondary-dark text-foreground dark:text-foreground-dark"
      )}
      aria-label="Close flight detail"
      type="button"
    >
      <Icon name="close" />
    </button>
  );
};
