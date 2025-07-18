import { ScrollContainer } from '@/shared/ui'
import { NavError } from '@/widgets'

export const ErrorMapWidget = () => {
  return (
    <ScrollContainer className="absolute inset-0 z-10 opacity-75">
      <main className="h-full w-full flex items-center justify-center flex-col text-foreground dark:text-foreground-dark">
        <div className="w-full max-w-110 flex items-stretch justify-center flex-col gap-1 p-4 bg-background dark:bg-background-dark transition-colors rounded-2xl">
          <h2 className="p-4 text-balance rounded-t-2xl text-4xl font-bold bg-secondary dark:bg-secondary-dark transition-colors">
            Error information
          </h2>
          <div className="grid grid-cols-2 gap-1">
            <p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-4">
              Message:
            </p>
            <p className="text-lg text-center font-bold bg-primary dark:bg-primary-dark transition-colors p-4">
              🛑 Failed to&nbsp;load map.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors mb-4 p-4 rounded-bl-2xl">
              Recommendation:
            </p>
            <p className="text-lg text-center bg-primary dark:bg-primary-dark transition-colors mb-4 p-4 rounded-br-2xl">
              Please check your connection or&nbsp;try again later.
            </p>
          </div>
          <NavError />
        </div>
      </main>
    </ScrollContainer>
  )
}
