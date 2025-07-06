import { PATHNAMES } from '@/shared/config'
import { CustomNavLink } from '@/shared/ui'
import { Icon } from '@/shared/ui/icon'

export const NavDesktop = () => {
  return (
    <div className="hidden lg:grid grid-cols-3 gap-1">
      <CustomNavLink to={PATHNAMES.HOME} className="rounded-l-2xl">
        <Icon name="home" /> Main
      </CustomNavLink>
      <CustomNavLink to={PATHNAMES.RACES} className="animate-delay-100">
        <Icon name="columns" /> Races
      </CustomNavLink>
      <CustomNavLink
        to={PATHNAMES.ABOUT}
        className="rounded-r-2xl text-xl animate-delay-200"
      >
        <Icon name="logo" className="h-4 w-4" /> About
      </CustomNavLink>
    </div>
  )
}
