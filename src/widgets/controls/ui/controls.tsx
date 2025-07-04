import { LanguageSwitcher, ThemeSwither } from '@/features'

export const Controls = () => {
  return (
    <div className="flex items-center gap-4 bg-background dark:bg-background-dark  rounded-2xl transition-colors animate-fade-left animate-delay-250">
      <LanguageSwitcher />
      <ThemeSwither />
    </div>
  )
}
