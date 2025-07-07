import { Skeleton } from '@/shared/ui/skeleton'

export const FlightItemSkeleton = () => {
  return (
    <div className="w-full min-h-50 rounded-2xl cursor-pointer p-0.5 overflow-hidden transition-colors">
      <div className="h-50 rounded-2xl flex flex-col justify-between bg-primary dark:bg-primary-dark p-4">
        <div className="flex items-center">
          <div className="flex items-center gap-2 mr-auto">
            <Skeleton className="w-8 h-8 rounded-4xl" />
            <Skeleton className="w-15 h-4" />
          </div>
          <Skeleton className="w-16 h-8 rounded-xl" />
        </div>
        <div className="w-fit ml-auto flex items-center justify-end">
          <Skeleton className="w-4 h-6" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-22 h-10" />
          </div>
          <Skeleton className="w-full h-2" />

          <div className="flex flex-col gap-2">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-22 h-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
