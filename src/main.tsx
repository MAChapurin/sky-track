import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/router'
// import { ReduxProvider } from './app/providers/redux-toolkit-provider'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
