import { FavoritesLink } from '@/entities/favorites'
import { BurgerTrigger, NavDesktop } from '@/features'
import { PATHNAMES } from '@/shared/config'
import { Icon } from '@/shared/ui'
import { Controls } from '@/widgets/controls'
import { MobileMenu } from '@/widgets/mobile-menu/ui/mobile-menu'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="p-2 px-4 w-full flex items-center justify-between bg-background dark:bg-background-dark transition-colors text-foreground dark:text-foreground-dark rounded-2xl relative z-100">
      <Link
        to={PATHNAMES.HOME}
        className="flex items-center gap-2 text-xl bg-primary dark:bg-primary-dark transition-colors p-2 rounded-2xl animate-fade-left"
      >
        <Icon name="logo" /> SkyTrack
      </Link>
      <NavDesktop />
      <div className="hidden lg:flex items-center gap-4">
        <FavoritesLink />
        <Link
          className="w-10 h-10 bg-primary dark:bg-primary-dark transition-colors p-2 rounded flex flex-col items-center justify-center animate-fade-left animate-delay-100"
          to={PATHNAMES.PROFILE}
        >
          <Icon
            name="profile"
            className="transition-colors text-foreground dark:text-foreground-dark "
          />
        </Link>
        <Controls />
      </div>
      <BurgerTrigger />
      <MobileMenu />
    </header>
  )
}
