import { PATHNAMES } from '@/shared/config'
import { Icon } from '@/shared/ui'
import { Link } from 'react-router-dom'

export const NavMobile = () => {
	return (
		<nav className="flex flex-col gap-1 w-full">
			<h2 className="p-2 text-balance rounded-t-2xl text-2xl font-bold bg-secondary dark:bg-secondary-dark transition-colors">
				Navigation
			</h2>
			<Link
				className="flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2  text-xl"
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
				className="flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 text-xl"
			>
				<Icon name="logo" className="h-4 w-4" /> About
			</Link>
			<Link
				to={PATHNAMES.FAVORITES}
				className="flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 text-xl"
			>
				<Icon name="favorites" className="h-4 w-4" /> Favorites
			</Link>
			<Link
				to={PATHNAMES.PROFILE}
				className="flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 rounded-b-2xl text-xl"
			>
				<Icon name="profile" className="h-4 w-4" /> Profile
			</Link>
		</nav>
	)
}
