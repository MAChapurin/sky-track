import { NavLink, type NavLinkProps } from 'react-router'
import { cn } from '@/shared/utils'

interface CustomNavLinkProps extends Omit<NavLinkProps, 'className' | 'to'> {
  to: string
  children: React.ReactNode
  className?: string
}

export const CustomNavLink = ({
  to,
  children,
  className,
  ...props
}: CustomNavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex items-center bg-primary dark:bg-primary-dark transition-colors gap-2 p-2 text-xl',
          {
            'bg-accent dark:bg-accent-dark duration-500': isActive
          },
          className
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}
