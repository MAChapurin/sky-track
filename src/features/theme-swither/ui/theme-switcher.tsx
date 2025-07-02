import { Icon } from '@/shared/ui/icon'
import { cn } from '@/shared/utils/cn'
import { THEME_MODE } from '../constants'
import { useSwithTheme } from '../model/use-switcher'

export function ThemeSwither() {
	const { onClick, theme } = useSwithTheme()
	return (
		<button
			onClick={onClick}
			className="relative w-20 h-10 items-center justify-evenly rounded-md transition flex bg-primary dark:bg-primary-dark"
		>
			<div
				className={cn(
					'absolute w-10 h-8 bg-secondary dark:bg-secondary-dark left-1 rounded-md transition-transform',
					{
						['translate-x-8']: theme === THEME_MODE.DARK
					}
				)}
			></div>
			<Icon
				name="sun"
				className="relative text-foreground dark:text-foreground-dark"
			/>
			<Icon
				name="moon"
				className="relative text-foreground dark:text-foreground-dark"
			/>
		</button>
	)
}
