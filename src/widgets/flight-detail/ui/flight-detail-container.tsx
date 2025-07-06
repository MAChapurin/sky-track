import { ScrollContainer } from '@/shared/ui'
import { cn } from '@/shared/utils'
import type { ReactNode, RefObject } from 'react'

export const FlightDetailContainer = ({
  isVisible,
  containerRef,
  children
}: {
  isVisible: boolean
  containerRef: RefObject<HTMLDivElement>
  children: ReactNode
}) => (
  <ScrollContainer className="fixed z-100 left-0 top-0 h-[100dvh] md:h-full w-screen md:w-full lg:static shrink-1 justify-self-end flex justify-end pointer-events-none">
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="flight-detail-title"
      ref={containerRef}
      className={cn(
        'w-full md:max-w-130 md:rounded-2xl text-white transition-transform duration-300 pointer-events-auto overflow-x-hidden overflow-y-auto z-50 scrollbar-none',
        isVisible ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {children}
    </div>
  </ScrollContainer>
)
