import { FavoritesLink } from '@/entities/favorites'
import { PATHNAMES } from '@/shared/config'
import { CustomNavLink, Icon } from '@/shared/ui'

export const NavMobile = () => {
  return (
    <nav id="mobile-menu" className="flex flex-col gap-1 w-full">
      <h2 className="p-2 text-balance rounded-t-2xl text-2xl font-bold bg-secondary dark:bg-secondary-dark transition-colors">
        Navigation
      </h2>
      <CustomNavLink to={PATHNAMES.HOME}>
        <Icon name="home" /> Main
      </CustomNavLink>
      <CustomNavLink to={PATHNAMES.RACES}>
        <Icon name="columns" className="h-4 w-4" /> Races
      </CustomNavLink>
      <CustomNavLink to={PATHNAMES.ABOUT}>
        <Icon name="logo" className="h-4 w-4" /> About
      </CustomNavLink>
      <FavoritesLink isMobileVariant />
      <CustomNavLink to={PATHNAMES.PROFILE} className="rounded-b-2xl">
        <Icon name="profile" className="h-4 w-4" /> Profile
      </CustomNavLink>
    </nav>
  )
}
