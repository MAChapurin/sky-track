// import { FavoritesButton } from '@/features/favorites-button/ui/favorites-button'
// import type { IFlight } from '@/shared/types'
// import { CloseButton } from './close-button'
// import { cn } from '@/shared/utils'

// export const FlightDetailHeader = ({
//   targetFlight,
//   onClose
// }: {
//   targetFlight: IFlight
//   onClose: () => void
// }) => {
//   return (
//     <div className="relative min-h-90 bg-gradient-to-r from-[#336699] to-[#8ABFFF] p-5 snap-start">
//       <div className="absolute bottom-1 left-1">
//         <FavoritesButton id={targetFlight.airline} />
//       </div>
//       <div
//         className={cn(
//           'flex items-center justify-between  p-5 rounded-2xl',
//           styles.backgroundFull
//         )}
//       >
//         <div className="flex flex-col">
//           <h2 id="flight-detail-title" className="text-accent text-3xl">
//             {targetFlight.airline}
//           </h2>
//           <div className={cn('text-xl transition-colors', styles.textPrimary)}>
//             {targetFlight.airplane.name}
//           </div>
//         </div>
//         <CloseButton onClick={onClose} data-ignore-swipe />
//       </div>
//       <img
//         loading="lazy"
//         src={targetFlight.airplane.image}
//         alt={`Plane: ${targetFlight.airplane.name}`}
//         title={targetFlight.airplane.name}
//         width={600}
//         height={300}
//         className="w-full h-auto rounded-xl"
//       />
//     </div>
//   )
// }
