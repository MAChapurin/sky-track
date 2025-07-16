import { Outlet } from 'react-router-dom'
import { BackgroundMap } from '@/widgets'
import { Header } from '@/widgets/header'

export const Layout = () => {
  return (
    <div className="w-screen h-[100dvh] min-w-80 relative">
      <div className="fixed inset-0 z-1 h-full w-full bg-background dark:bg-background-dark">
        <BackgroundMap />
      </div>
      <div className="max-w-480 mx-auto w-full h-[100dvh] px-2 md:px-4 lg:px-8 flex flex-col">
        <div className="h-15 shrink-0 flex items-center mb-4">
          <Header />
        </div>
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
