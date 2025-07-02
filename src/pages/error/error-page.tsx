import { NavError } from '@/widgets'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export function ErrorPage() {
	const error = useRouteError()

	console.error(error)

	let message = 'Unknown error'
	let code = 404

	if (isRouteErrorResponse(error)) {
		code = error.status
		message = error.statusText || message
	} else if (error instanceof Error) {
		message = error.message
		code = 500
	}

	return (
		<main className="h-full w-full p-8 flex items-center justify-center flex-col text-foreground dark:text-foreground-dark">
			<div className="w-full max-w-110 flex items-stretch justify-center flex-col gap-1 p-4 bg-background dark:bg-background-dark transition-colors rounded-2xl">
				<h1 className="p-4 text-balance rounded-t-2xl text-4xl font-bold bg-secondary dark:bg-secondary-dark transition-colors">
					Error information
				</h1>
				<div className="grid grid-cols-2 gap-1">
					<p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-4">
						Code:
					</p>
					<p className="text-4xl text-center font-bold bg-primary dark:bg-primary-dark transition-colors p-4">
						{code}
					</p>
				</div>
				<div className="grid grid-cols-2 gap-1">
					<p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors p-4">
						Message:
					</p>
					<p className="text-lg bg-primary dark:bg-primary-dark transition-colors p-4">
						{message}
					</p>
				</div>
				<div className="grid grid-cols-2 gap-1">
					<p className="flex items-center justify-center text-lg bg-primary dark:bg-primary-dark transition-colors mb-4 p-4 rounded-bl-2xl">
						Recommendation:
					</p>
					<p className="text-lg text-center bg-primary dark:bg-primary-dark transition-colors mb-4 p-4 rounded-br-2xl">
						You can return to the main or previous page.
					</p>
				</div>
				<NavError />
			</div>
		</main>
	)
}
