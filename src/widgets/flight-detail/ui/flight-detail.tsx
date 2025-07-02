import { Icon } from '@/shared/ui/icon'
import { cn } from '@/shared/utils/cn'
import { useFlightDetail } from '../model/use-flight-detail'
import { ProgressLine } from './progress-line'
import { CloseButton } from './close-button'
import { ScrollContainer } from '@/shared/ui'

const styles = {
  flexCenter: 'flex flex-col items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  textPrimary: 'text-foreground dark:text-foreground-dark transition-colors',
  textSecondary: 'text-muted dark:text-muted-dark transition-colors',
  backgroundFull: 'bg-background dark:bg-background-dark transition-colors',
  backgroundPrimary: 'bg-primary dark:bg-primary-dark transition-colors',
  backgroundSecondary: 'bg-secondary dark:bg-secondary-dark transition-colors',
  colSpan: 'col-span-2 md:col-span-1'
} as const

export const FlightDetail = () => {
  const { targetFlight, isVisible, containerRef, closeWithAnimation } =
    useFlightDetail()

  return (
    <ScrollContainer className="fixed left-0 top-0 h-screen md:h-[calc(100dvh-120px)] w-screen md:w-full lg:static shrink-1 justify-self-end flex justify-end pointer-events-none">
      <div
        ref={containerRef}
        className={cn(
          'w-full h-fit md:max-w-130 md:rounded-2xl text-white transition-transform duration-300 pointer-events-auto overflow-x-hidden overflow-y-auto z-50',
          isVisible ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {targetFlight && (
          <>
            <div className="min-h-90 bg-gradient-to-r from-[#336699] to-[#8ABFFF] p-5 snap-start">
              <div
                data-ignore-swipe
                className={cn(
                  'flex items-center justify-between  p-5 rounded-2xl',
                  styles.backgroundFull
                )}
              >
                <div className="flex flex-col">
                  <div className="text-accent text-3xl">
                    {targetFlight.airline}
                  </div>
                  <div
                    className={cn(
                      'text-xl transition-colors',
                      styles.textPrimary
                    )}
                  >
                    {targetFlight.airplane.name}
                  </div>
                </div>
                <CloseButton onClick={closeWithAnimation} data-ignore-swipe />
              </div>
              <img
                loading="lazy"
                src={targetFlight.airplane.image}
                alt={targetFlight.airplane.name}
                title={targetFlight.airplane.name}
              />
            </div>

            <div
              className={cn(
                'min-h-100 p-4 md:rounded-b-2xl',
                styles.backgroundFull
              )}
            >
              <div className="grid grid-cols-2 gap-1 relative mb-2.5">
                <Icon
                  name="separatorPlane"
                  className="absolute left-1/2 top-12 -translate-x-6"
                />
                <div
                  className={cn(
                    'flex flex-col items-center p-6 rounded-tl-2xl snap-start',
                    styles.backgroundPrimary
                  )}
                >
                  <div
                    className={cn('font-medium text-5xl', styles.textPrimary)}
                  >
                    {targetFlight.from.code}
                  </div>
                  <div className={cn('text-2xl', styles.textPrimary)}>
                    {targetFlight.from.city}
                  </div>
                  <div className={cn('text-base', styles.textSecondary)}>
                    {targetFlight.from.timezone}
                  </div>
                </div>
                <div
                  className={cn(
                    'flex flex-col items-center p-6 rounded-tr-2xl',
                    styles.backgroundPrimary
                  )}
                >
                  <div
                    className={cn('font-medium text-5xl', styles.textPrimary)}
                  >
                    {targetFlight.to.code}
                  </div>
                  <div className={cn('text-2xl', styles.textPrimary)}>
                    {targetFlight.to.city}
                  </div>
                  <div className={cn('text-base', styles.textSecondary)}>
                    {targetFlight.to.timezone}
                  </div>
                </div>
                <div
                  className={cn(
                    'col-span-2 px-4 py-6 flex flex-col gap-6 snap-start',
                    styles.backgroundPrimary
                  )}
                >
                  <ProgressLine className="hidden md:flex" />
                  <div
                    className={cn(
                      'mt-auto flex-col gap-6 md:gap-0 md:flex-row',
                      styles.flexBetween
                    )}
                  >
                    <div className={cn('text-xl', styles.textSecondary)}>
                      2 715 km · 3h 1m
                    </div>
                    <ProgressLine className="md:hidden" />
                    <div className={cn('text-xl', styles.textSecondary)}>
                      2 715 km · 3h 1m
                    </div>
                  </div>
                </div>
                <div
                  className={cn(
                    'h-16 px-4 py-6 col-span-2 md:col-span-1',
                    styles.flexBetween,
                    styles.backgroundPrimary
                  )}
                >
                  <div className={cn('text-xl', styles.textSecondary)}>
                    Scheduled
                  </div>
                  <time
                    className={cn('text-xl', styles.textPrimary)}
                    dateTime="2025-06-24T08:15"
                  >
                    8:15
                  </time>
                </div>
                <div
                  className={cn(
                    'h-16 px-4 py-6 col-span-2 md:col-span-1',
                    styles.flexBetween,
                    styles.backgroundPrimary
                  )}
                >
                  <div className={cn('text-xl', styles.textSecondary)}>
                    Actual
                  </div>
                  <time
                    className={cn('text-xl', styles.textPrimary)}
                    dateTime="2025-06-24T08:24"
                  >
                    8:24
                  </time>
                </div>
                <div
                  className={cn(
                    'h-16 px-4 py-6 col-span-2 md:col-span-1 md:rounded-bl-2xl',
                    styles.flexBetween,
                    styles.backgroundPrimary
                  )}
                >
                  <div className={cn('text-xl', styles.textSecondary)}>
                    Scheduled
                  </div>
                  <time
                    className={cn('text-xl', styles.textPrimary)}
                    dateTime="2025-06-24T13:25"
                  >
                    13:25
                  </time>
                </div>
                <div
                  className={cn(
                    'h-16 px-4 py-6 col-span-2 md:col-span-1 rounded-b-2xl md:rounded-br-2xl md:rounded-bl-none',
                    styles.flexBetween,
                    styles.backgroundPrimary
                  )}
                >
                  <div className={cn('text-xl', styles.textSecondary)}>
                    Estimated
                  </div>
                  <time
                    className={cn('text-xl', styles.textPrimary)}
                    dateTime="2025-06-24T13:23"
                  >
                    13:23
                  </time>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1">
                <button
                  data-ignore-swipe
                  className={cn(
                    'gap-2 p-4 rounded-l-2xl text-xl',
                    styles.textPrimary,
                    styles.flexCenter,
                    styles.backgroundPrimary
                  )}
                >
                  <Icon name="route" />
                  Route
                </button>
                <button
                  data-ignore-swipe
                  className={cn(
                    'gap-2 p-4 text-xl',
                    styles.textPrimary,
                    styles.flexCenter,
                    styles.backgroundPrimary
                  )}
                >
                  <Icon name="follow" />
                  Follow
                </button>
                <button
                  data-ignore-swipe
                  className={cn(
                    'gap-2 p-4 text-xl',
                    styles.textPrimary,
                    styles.flexCenter,
                    styles.backgroundPrimary
                  )}
                >
                  <Icon name="shared" />
                  Share
                </button>
                <button
                  data-ignore-swipe
                  className={cn(
                    'gap-2 p-4 rounded-r-2xl text-xl',
                    styles.textPrimary,
                    styles.flexCenter,
                    styles.backgroundPrimary
                  )}
                >
                  <Icon name="more" />
                  More
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </ScrollContainer>
  )
}
