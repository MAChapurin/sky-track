import { Icon } from '@/shared/ui/icon'
import { cn } from '@/shared/utils/cn'

export const ProgressLine = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn('w-full h-1 min-h-1 rounded-2xl flex relative', className)}
		>
			<div className="w-1/2 h-full bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l-2xl"></div>
			<div className="absolute -top-8 translate-y-full left-1/2 -translate-x-1/2">
				<Icon
					name="plane"
					className={
						'text-foreground dark:text-foreground-dark transition-colors'
					}
				/>
			</div>
			<div
				className={
					'w-1/2 h-full rounded-r-2xl bg-secondary dark:bg-secondary-dark transition-colors'
				}
			></div>
		</div>
	)
}
