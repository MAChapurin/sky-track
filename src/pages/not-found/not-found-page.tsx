import { NavError } from '@/widgets'

export function NotFoundPage() {
  return (
    <main className="h-full w-full p-8 flex items-center justify-center flex-col text-foreground dark:text-foreground-dark">
      <div className="w-full text-center max-w-110 flex items-stretch justify-center flex-col gap-1 p-4 bg-background dark:bg-background-dark transition-colors rounded-2xl">
        <h1 className="p-4 text-balance rounded-t-2xl text-4xl font-bold bg-secondary dark:bg-secondary-dark transition-colors">
          Error information
        </h1>
        <div className="grid grid-cols-2 gap-1 ">
          <p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-4">
            Code:
          </p>
          <p className="text-4xl text-center font-bold bg-primary dark:bg-primary-dark transition-colors p-4">
            404
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1 ">
          <p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-4">
            Message:
          </p>
          <p className="text-lg bg-primary dark:bg-primary-dark transition-colors p-4">
            Not found page
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1 ">
          <p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors mb-4 p-4 rounded-bl-2xl">
            Recomendation:
          </p>
          <p className="text-lg bg-primary dark:bg-primary-dark transition-colors mb-4 p-4 rounded-br-2xl">
            You can return to&nbsp;the main or&nbsp;previous page
          </p>
        </div>
        <NavError />
      </div>
    </main>
  )
}
