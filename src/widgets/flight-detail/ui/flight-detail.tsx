import { cn } from '@/shared/utils/cn'

import { DetailControls } from './controls'

import { useFlightDetail } from '../model/useFlightDetail'
import { background } from './flight-detail.styles'
import { FlightDetailContainer } from './flight-detail-container'
import { FlightHeader } from './flight-detail-header'
import { FlightRouteInfo } from './flight-route-info'
import { FlightInfoSection } from './flight-info'

export const FlightDetail = () => {
  const { targetFlight, isVisible, containerRef, closeWithAnimation } =
    useFlightDetail()

  return (
    <FlightDetailContainer isVisible={isVisible} containerRef={containerRef}>
      {targetFlight && (
        <>
          <FlightHeader
            airline={targetFlight.airline}
            airplaneName={targetFlight.airplane.name}
            airplaneImage={targetFlight.airplane.image}
            onClose={closeWithAnimation}
          />
          <div
            className={cn(
              'min-h-100 p-4 md:rounded-b-2xl',
              background({ variant: 'full' })
            )}
          >
            <FlightRouteInfo
              from={targetFlight.from}
              to={targetFlight.to}
              progress={targetFlight.progress}
            />
            <FlightInfoSection
              airplane={targetFlight.airplane}
              route={targetFlight.route}
            />
            <DetailControls />
          </div>
        </>
      )}
    </FlightDetailContainer>
  )
}

