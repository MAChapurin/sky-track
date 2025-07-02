import { LanguageSwitcher, ThemeSwither } from '@/features'
import { CUSTOM_EVENTS } from '@/shared/config'
import { Icon } from '@/shared/ui'
import { emitter } from '@/shared/utils'

export const ControlsGrid = () => {
  return (
    <div className="grid grid-cols-2 w-full h-fit gap-1">
      <h2 className="col-span-2 p-2 text-balance rounded-t-2xl text-2xl font-bold bg-secondary dark:bg-secondary-dark transition-colors">
        Controls
      </h2>

      <div className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-1">
        Theme:
      </div>
      <div className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-0.5">
        <ThemeSwither />
      </div>

      <div className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-1">
        Language:
      </div>
      <div className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-0.5">
        <LanguageSwitcher />
      </div>
      <div className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-1 rounded-bl-2xl">
        Menu:
      </div>
      <div className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-1 rounded-br-2xl">
        <button
          onClick={() => {
            emitter.emit(CUSTOM_EVENTS.CLOSE_MENU)
          }}
          className="bg-secondary dark:bg-secondary-dark transition-colors rounded p-1 flex items-center gap-2"
        >
          Close <Icon name="close" />
        </button>
      </div>
    </div>
  )
}
