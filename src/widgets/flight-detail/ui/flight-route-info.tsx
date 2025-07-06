import { ProgressLine } from '@/features/progress-line'
import type { IFlightLocation, Percent } from '@/shared/types'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/utils'
import { background, flexBetween, text } from './flight-detail.styles'

const FlightLocationCard = ({
  location,
  rounded
}: {
  location: IFlightLocation
  rounded: string
}) => (
  <div
    className={cn(
      'flex flex-col items-center p-6',
      rounded === 'tl' ? 'rounded-tl-2xl snap-start' : 'rounded-tr-2xl',
      background({ variant: 'primary' })
    )}
  >
    <div className={cn('font-medium text-5xl', text())}>{location.code}</div>
    <div className={cn('text-2xl', text())}>{location.city}</div>
    <div className={cn('text-base', text({ variant: 'secondary' }))}>
      {location.timezone}
    </div>
  </div>
)

const ProgressSection = ({ progress }: { progress: Percent }) => (
  <div
    className={cn(
      'col-span-2 px-4 py-6 flex flex-col gap-6 snap-start',
      background({ variant: 'primary' })
    )}
  >
    <ProgressLine progress={progress} className="hidden md:flex" />
    <div
      className={cn(
        'mt-auto flex-col gap-6 md:gap-0 md:flex-row',
        flexBetween()
      )}
    >
      <div className={cn('text-xl', text({ variant: 'secondary' }))}>
        2 715 km · 3h 1m
      </div>
      <ProgressLine progress={progress} className="md:hidden" />
      <div className={cn('text-xl', text({ variant: 'secondary' }))}>
        2 715 km · 3h 1m
      </div>
    </div>
  </div>
)

const FlightTimes = () => (
  <>
    <FlightTime label="Scheduled" time="8:15" dateTime="2025-06-24T08:15" />
    <FlightTime label="Actual" time="8:24" dateTime="2025-06-24T08:24" />
    <FlightTime
      label="Scheduled"
      time="13:25"
      dateTime="2025-06-24T13:25"
      rounded="bl"
    />
    <FlightTime
      label="Estimated"
      time="13:23"
      dateTime="2025-06-24T13:23"
      rounded="br"
    />
  </>
)

const FlightTime = ({
  label,
  time,
  dateTime,
  rounded
}: {
  label: string
  time: string
  dateTime: string
  rounded?: string
}) => (
  <div
    className={cn(
      'h-16 px-4 py-6 col-span-2 md:col-span-1',
      flexBetween(),
      background({ variant: 'primary' }),
      rounded === 'bl' ? 'md:rounded-bl-2xl' : '',
      rounded === 'br'
        ? 'rounded-b-2xl md:rounded-br-2xl md:rounded-bl-none'
        : ''
    )}
  >
    <div className={cn('text-xl', text({ variant: 'secondary' }))}>{label}</div>
    <time className={cn('text-xl', text())} dateTime={dateTime}>
      {time}
    </time>
  </div>
)

export const FlightRouteInfo = ({
  from,
  to,
  progress
}: {
  from: IFlightLocation
  to: IFlightLocation
  progress: Percent
}) => (
  <div className="grid grid-cols-2 gap-1 relative mb-2.5">
    <Icon
      name="separatorPlane"
      className="absolute left-1/2 top-12 -translate-x-6"
    />
    <FlightLocationCard location={from} rounded="tl" />
    <FlightLocationCard location={to} rounded="tr" />
    <ProgressSection progress={progress} />
    <FlightTimes />
  </div>
)
