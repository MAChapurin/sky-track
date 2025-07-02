import { createBrowserRouter } from 'react-router-dom'
import App from '@/app/App'
import { HomePage, NotFoundPage } from '@/pages'
import { ErrorPage } from '@/pages/error/error-page'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: '*',
				element: <NotFoundPage />
			}
		]
	}
])
