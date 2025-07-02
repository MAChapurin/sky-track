import { PATHNAMES } from '@/shared/config'
import { Icon } from '@/shared/ui/icon'
import { Link } from 'react-router-dom'

export const NavDesktop = () => {
	return (
		<nav className="hidden lg:grid grid-cols-3 gap-1">
			<Link
				className="flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 rounded-l-2xl text-xl"
				to={PATHNAMES.HOME}
			>
				<Icon name="home" /> Main
			</Link>
			<Link
				className="flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 text-xl"
				to={PATHNAMES.RACES}
			>
				<Icon name="columns" /> Races
			</Link>
			<Link
				to={PATHNAMES.ABOUT}
				className="flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 rounded-r-2xl text-xl"
			>
				<Icon name="logo" className="h-4 w-4" /> About
			</Link>
		</nav>
	)
}
