import { cn } from '@/shared/utils'

export const NotFoundFlightsAlert = () => {
  return (
    <div
      role="alert"
      className={cn(
        'flex flex-col items-center justify-center w-full min-h-50',
        'text-3xl text-center',
        'rounded-2xl overflow-hidden',
        'transition-colors text-foreground dark:text-foreground-dark bg-primary dark:bg-primary-dark',
        'p-4'
      )}
    >
      No found flights...
    </div>
  )
}
