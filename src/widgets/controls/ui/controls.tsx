import { ThemeSwither } from "@/features";

export const Controls = () => {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark rounded-2xl transition-colors">
      <ThemeSwither />
    </div>
  );
};
