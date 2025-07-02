import { useState, useRef, useEffect, type ReactNode } from 'react'
import { Icon } from './icon'
import { cn } from '../utils'

export const Dropdown = ({
  title,
  className,
  children
}: {
  title: string
  className?: string
  children: ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      className={cn('relative inline-block text-left', className)}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-primary dark:bg-primary-dark text-sm font-medium text-foreground dark:text-foreground-dark transition-transform"
      >
        {title}
        <Icon name="arrowGroup" />
      </button>

      {isOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-fit z-50">
          {children}
        </div>
      )}
    </div>
  )
}
