import { cn } from '@/shared/utils'
import { background, colSpan, flexBetween, text } from './flight-detail.styles'
import type { IFlightAirplane, IFlightRoute } from '@/shared/types'

const FlightInfoItem = ({
  label,
  value,
  rounded
}: {
  label: string
  value: string
  rounded?: string
}) => (
  <div
    className={cn(
      'h-16 px-4 py-6',
      flexBetween(),
      background({ variant: 'primary' }),
      colSpan(),
      rounded === 'bl' ? 'rounded-bl-none md:rounded-bl-2xl' : '',
      rounded === 'br'
        ? 'rounded-b-2xl md:rounded-bl-none md:rounded-br-2xl'
        : ''
    )}
  >
    <div className={cn('text-xl md:hidden', text({ variant: 'secondary' }))}>
      {label}
    </div>
    <div className={cn('text-xl', text())}>{value}</div>
  </div>
)

export const FlightInfoSection = ({
  airplane,
  route
}: {
  airplane: IFlightAirplane
  route: IFlightRoute
}) => (
  <div className="grid grid-cols-2 gap-1 relative mb-2.5">
    <div
      className={cn(
        'col-span-2 bg-[#FFFFFF1A] p-4 rounded-t-2xl',
        background({ variant: 'secondary' })
      )}
    >
      <h3 className={cn('text-xl', text())}>Flight information</h3>
    </div>
    <FlightInfoItem label="Plane" value={airplane.name} />
    <FlightInfoItem label="Country" value="🇮🇪 Ireland" />
    <FlightInfoItem label="Speed" value={`${route.speed} km/h`} rounded="bl" />
    <FlightInfoItem
      label="Altitude"
      value={`${route.altitude} m`}
      rounded="br"
    />
  </div>
)
