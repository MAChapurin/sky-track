import { FavoritesLink } from '@/entities/favorites'
import { BurgerTrigger, NavDesktop } from '@/features'
import { PATHNAMES } from '@/shared/config'
import { Icon } from '@/shared/ui'
import { Controls } from '@/widgets/controls'
import { MobileMenu } from '@/widgets/mobile-menu/ui/mobile-menu'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header
      className="p-2 px-4 w-full flex items-center justify-between bg-background dark:bg-background-dark transition-colors text-foreground dark:text-foreground-dark rounded-2xl relative z-100"
      role="banner"
    >
      <Link
        to={PATHNAMES.HOME}
        className="flex items-center gap-2 text-xl bg-primary dark:bg-primary-dark transition-colors duration-200 p-2 rounded-2xl animate-fade-left"
        aria-label="To main page"
      >
        <Icon name="logo" aria-hidden="true" /> SkyTrack
      </Link>

      <nav
        className="hidden lg:flex items-center gap-4"
        aria-label="Main navigation"
      >
        <NavDesktop />
        <FavoritesLink />
        <Link
          to={PATHNAMES.PROFILE}
          className="w-10 h-10 bg-primary dark:bg-primary-dark transition-colors p-2 rounded flex items-center justify-center animate-fade-left animate-delay-100"
          aria-label="Profile"
        >
          <Icon
            name="profile"
            className="text-foreground dark:text-foreground-dark"
            aria-hidden="true"
          />
        </Link>
        <Controls />
      </nav>
      <div className="lg:hidden flex items-center gap-2">
        <BurgerTrigger />
      </div>
      <MobileMenu />
    </header>
  )
}
