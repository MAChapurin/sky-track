import { PATHNAMES } from '@/shared/config'
import { Icon } from '@/shared/ui/icon'
import { Link, useNavigate } from 'react-router-dom'

export const NavError = () => {
  const navigate = useNavigate()
  return (
    <nav className="grid grid-cols-2 gap-1">
      <h2 className="col-span-2 p-4 text-balance rounded-t-2xl text-4xl font-bold bg-secondary dark:bg-secondary-dark transition-colors animate-fade-up animate-delay-250">
        Navigation
      </h2>
      <Link
        className="flex items-center flex-col bg-primary dark:bg-primary-dark transition-colors gap-2 p-4 rounded-bl-2xl text-xl animate-fade-up animate-delay-300"
        to={PATHNAMES.HOME}
      >
        <Icon name="home" className="w-8 h-8" /> Main
      </Link>
      <button
        aria-label="Go back to previous page"
        className="flex items-center flex-col bg-primary dark:bg-primary-dark transition-colors gap-2 p-4 rounded-br-2xl text-xl animate-fade-up animate-delay-300"
        onClick={() => navigate(-1)}
      >
        <Icon name="back" className="w-8 h-8" /> Back
      </button>
    </nav>
  )
}
