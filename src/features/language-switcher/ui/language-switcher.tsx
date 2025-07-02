import { cn } from '@/shared/utils/cn'
import { useState } from 'react'

export const LanguageSwitcher = () => {
  const [local, setLocale] = useState<'ru' | 'en'>('ru')
  const onClick = () => {
    setLocale(prev => (prev === 'ru' ? 'en' : 'ru'))
  }
  return (
    <button
      onClick={onClick}
      className="relative w-20 h-10 items-center justify-evenly rounded-md flex bg-primary dark:bg-primary-dark transition-colors"
    >
      <div
        className={cn(
          'absolute w-8 h-8 bg-secondary dark:bg-secondary-dark left-1 rounded-md transition-transform',
          {
            ['translate-x-10']: local === 'en'
          }
        )}
      ></div>
      <span className="relative w-8 h-8 flex flex-col items-center justify-center text-foreground dark:text-foreground-dark transition-colors">
        RU
      </span>
      <span className="relative w-8 h-8 flex flex-col items-center justify-center text-foreground dark:text-foreground-dark transition-colors">
        EN
      </span>
    </button>
  )
}
