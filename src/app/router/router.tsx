import { createBrowserRouter } from 'react-router-dom'
import App from '@/app/App'
import { FavoritesPage, HomePage, NotFoundPage } from '@/pages'
import { ErrorPage } from '@/pages/error/error-page'
import { PATHNAMES } from '@/shared/config'

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
        path: PATHNAMES.FAVORITES,
        element: <FavoritesPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
])
