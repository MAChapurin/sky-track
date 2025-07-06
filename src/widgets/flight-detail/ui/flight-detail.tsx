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

// export const FlightDetail = () => {
//   const { targetFlight, isVisible, containerRef, closeWithAnimation } =
//     useFlightDetail()

//   return (
//     <ScrollContainer className="fixed z-100 left-0 top-0 h-[100dvh] md:h-full w-screen md:w-full lg:static shrink-1 justify-self-end flex justify-end pointer-events-none">
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="flight-detail-title"
//         ref={containerRef}
//         className={cn(
//           'w-full md:max-w-130 md:rounded-2xl text-white transition-transform duration-300 pointer-events-auto overflow-x-hidden overflow-y-auto z-50 scrollbar-none',
//           isVisible ? 'translate-x-0' : 'translate-x-full'
//         )}
//       >
//         {targetFlight && (
//           <>
//             <div className="relative min-h-90 bg-gradient-to-r from-[#336699] to-[#8ABFFF] p-5 snap-start">
//               <div className="absolute bottom-1 left-1">
//                 <FavoritesButton id={targetFlight.airline} />
//               </div>
//               <div
//                 className={cn(
//                   'flex items-center justify-between  p-5 rounded-2xl',
//                   background({ variant: 'full' })
//                 )}
//               >
//                 <div className="flex flex-col">
//                   <h2 id="flight-detail-title" className="text-accent text-3xl">
//                     {targetFlight.airline}
//                   </h2>
//                   <div className={cn('text-xl', text())}>
//                     {targetFlight.airplane.name}
//                   </div>
//                 </div>
//                 <CloseButton onClick={closeWithAnimation} data-ignore-swipe />
//               </div>
//               <img
//                 loading="lazy"
//                 src={targetFlight.airplane.image}
//                 alt={`Plane: ${targetFlight.airplane.name}`}
//                 title={targetFlight.airplane.name}
//                 width={600}
//                 height={300}
//                 className="w-full h-auto rounded-xl"
//               />
//             </div>

//             <div
//               className={cn(
//                 'min-h-100 p-4 md:rounded-b-2xl',
//                 background({ variant: 'full' })
//               )}
//             >
//               <div className="grid grid-cols-2 gap-1 relative mb-2.5">
//                 <Icon
//                   name="separatorPlane"
//                   className="absolute left-1/2 top-12 -translate-x-6"
//                 />
//                 <div
//                   className={cn(
//                     'flex flex-col items-center p-6 rounded-tl-2xl snap-start',
//                     background({ variant: 'primary' })
//                   )}
//                 >
//                   <div className={cn('font-medium text-5xl', text())}>
//                     {targetFlight.from.code}
//                   </div>
//                   <div className={cn('text-2xl', text())}>
//                     {targetFlight.from.city}
//                   </div>
//                   <div
//                     className={cn('text-base', text({ variant: 'secondary' }))}
//                   >
//                     {targetFlight.from.timezone}
//                   </div>
//                 </div>
//                 <div
//                   className={cn(
//                     'flex flex-col items-center p-6 rounded-tr-2xl',
//                     background({ variant: 'primary' })
//                   )}
//                 >
//                   <div className={cn('font-medium text-5xl', text())}>
//                     {targetFlight.to.code}
//                   </div>
//                   <div className={cn('text-2xl', text())}>
//                     {targetFlight.to.city}
//                   </div>
//                   <div
//                     className={cn('text-base', text({ variant: 'secondary' }))}
//                   >
//                     {targetFlight.to.timezone}
//                   </div>
//                 </div>
//                 <div
//                   className={cn(
//                     'col-span-2 px-4 py-6 flex flex-col gap-6 snap-start',
//                     background({ variant: 'primary' })
//                   )}
//                 >
//                   <ProgressLine
//                     progress={targetFlight.progress}
//                     className="hidden md:flex"
//                   />
//                   <div
//                     className={cn(
//                       'mt-auto flex-col gap-6 md:gap-0 md:flex-row',
//                       flexBetween()
//                     )}
//                   >
//                     <div
//                       className={cn('text-xl', text({ variant: 'secondary' }))}
//                     >
//                       2 715 km · 3h 1m
//                     </div>
//                     <ProgressLine
//                       progress={targetFlight.progress}
//                       className="md:hidden"
//                     />
//                     <div
//                       className={cn('text-xl', text({ variant: 'secondary' }))}
//                     >
//                       2 715 km · 3h 1m
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className={cn(
//                     'h-16 px-4 py-6 col-span-2 md:col-span-1',
//                     flexBetween(),
//                     background({ variant: 'primary' })
//                   )}
//                 >
//                   <div
//                     className={cn('text-xl', text({ variant: 'secondary' }))}
//                   >
//                     Scheduled
//                   </div>
//                   <time
//                     className={cn('text-xl', text())}
//                     dateTime="2025-06-24T08:15"
//                   >
//                     8:15
//                   </time>
//                 </div>
//                 <div
//                   className={cn(
//                     'h-16 px-4 py-6 col-span-2 md:col-span-1',
//                     flexBetween(),
//                     background({ variant: 'primary' })
//                   )}
//                 >
//                   <div
//                     className={cn('text-xl', text({ variant: 'secondary' }))}
//                   >
//                     Actual
//                   </div>
//                   <time
//                     className={cn('text-xl', text())}
//                     dateTime="2025-06-24T08:24"
//                   >
//                     8:24
//                   </time>
//                 </div>
//                 <div
//                   className={cn(
//                     'h-16 px-4 py-6 col-span-2 md:col-span-1 md:rounded-bl-2xl',
//                     flexBetween(),
//                     background({ variant: 'primary' })
//                   )}
//                 >
//                   <div
//                     className={cn('text-xl', text({ variant: 'secondary' }))}
//                   >
//                     Scheduled
//                   </div>
//                   <time
//                     className={cn('text-xl', text())}
//                     dateTime="2025-06-24T13:25"
//                   >
//                     13:25
//                   </time>
//                 </div>
//                 <div
//                   className={cn(
//                     'h-16 px-4 py-6 col-span-2 md:col-span-1 rounded-b-2xl md:rounded-br-2xl md:rounded-bl-none',
//                     flexBetween(),
//                     background({ variant: 'primary' })
//                   )}
//                 >
//                   <div
//                     className={cn('text-xl', text({ variant: 'secondary' }))}
//                   >
//                     Estimated
//                   </div>
//                   <time
//                     className={cn('text-xl', text())}
//                     dateTime="2025-06-24T13:23"
//                   >
//                     13:23
//                   </time>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-1 relative mb-2.5">
//                 <div
//                   className={cn(
//                     'col-span-2 bg-[#FFFFFF1A] p-4 rounded-t-2xl',
//                     background({ variant: 'secondary' })
//                   )}
//                 >
//                   <h3 className={cn('text-xl', text())}>Flight information</h3>
//                 </div>
//                 <div
//                   className={cn(
//                     'h-16 px-4 py-6',
//                     flexBetween(),
//                     background({ variant: 'primary' }),
//                     colSpan()
//                   )}
//                 >
//                   <div
//                     className={cn(
//                       'text-xl md:hidden',
//                       text({ variant: 'secondary' })
//                     )}
//                   >
//                     Plane
//                   </div>
//                   <div className={cn('text-xl', text())}>
//                     {targetFlight.airplane.name}
//                   </div>
//                 </div>
//                 <div
//                   className={cn(
//                     'h-16 px-4 py-6',
//                     flexBetween(),
//                     background({ variant: 'primary' }),
//                     colSpan()
//                   )}
//                 >
//                   <div
//                     className={cn(
//                       'text-xl md:hidden',
//                       text({ variant: 'secondary' })
//                     )}
//                   >
//                     Country
//                   </div>
//                   <div className={cn('text-xl', text())}>🇮🇪 Ireland</div>
//                 </div>
//                 <div
//                   className={cn(
//                     'h-16 px-4 py-6 rounded-bl-none md:rounded-bl-2xl',
//                     flexBetween(),
//                     background({ variant: 'primary' }),
//                     colSpan()
//                   )}
//                 >
//                   <div
//                     className={cn('text-xl', text({ variant: 'secondary' }))}
//                   >
//                     Speed
//                   </div>
//                   <div className={cn('text-xl', text())}>
//                     {targetFlight.route.speed} km/h
//                   </div>
//                 </div>
//                 <div
//                   className={cn(
//                     'h-16 px-4 py-6 rounded-b-2xl md:rounded-bl-none md:rounded-br-2xl ',
//                     flexBetween(),
//                     background({ variant: 'primary' }),
//                     colSpan()
//                   )}
//                 >
//                   <div
//                     className={cn('text-xl', text({ variant: 'secondary' }))}
//                   >
//                     Altitude
//                   </div>
//                   <div className={cn('text-xl', text())}>
//                     {targetFlight.route.altitude} m
//                   </div>
//                 </div>
//               </div>
//               <DetailControls />
//             </div>
//           </>
//         )}
//       </div>
//     </ScrollContainer>
//   )
// }
