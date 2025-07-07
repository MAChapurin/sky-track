import { cn } from '../utils'

interface SkeletonProps {
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={cn('bg-gray-300 animate-pulse rounded-md', className)} />
  )
}
