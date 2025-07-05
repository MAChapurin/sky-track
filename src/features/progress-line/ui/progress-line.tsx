import type { Percent } from '@/shared/types'
import { Icon } from '@/shared/ui/icon'
import { cn } from '@/shared/utils/cn'

export const ProgressLine = ({
  className,
  progress
}: {
  className?: string
  progress: Percent
}) => {
  return (
    <div
      className={cn('w-full h-1 min-h-1 rounded-2xl flex relative', className)}
    >
      <div
        style={{
          width: `${progress}%`
        }}
        className="h-full bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l-2xl transition-transform"
      ></div>
      <div
        style={{
          left: `${progress}%`
        }}
        className="absolute -top-8 translate-y-full -translate-x-1/2 transition-transform"
      >
        <Icon
          name="plane"
          className={
            'text-foreground dark:text-foreground-dark transition-colors'
          }
        />
      </div>
      <div
        style={{
          width: `${100 - progress}%`
        }}
        className={
          'w-1/2 h-full rounded-r-2xl bg-secondary dark:bg-secondary-dark  transition-all'
        }
      ></div>
    </div>
  )
}
