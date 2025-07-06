import { FavoritesButton } from '@/features/favorites-button/ui/favorites-button'
import { cn } from '@/shared/utils'
import { background, text } from './flight-detail.styles'
import { CloseButton } from './close-button'

export const FlightHeader = ({
  airline,
  airplaneName,
  airplaneImage,
  onClose
}: {
  airline: string
  airplaneName: string
  airplaneImage: string
  onClose: () => void
}) => (
  <div className="relative min-h-90 bg-gradient-to-r from-[#336699] to-[#8ABFFF] p-5 snap-start">
    <div className="absolute bottom-1 left-1">
      <FavoritesButton id={airline} />
    </div>
    <div
      className={cn(
        'flex items-center justify-between p-5 rounded-2xl',
        background({ variant: 'full' })
      )}
    >
      <div className="flex flex-col">
        <h2 id="flight-detail-title" className="text-accent text-3xl">
          {airline}
        </h2>
        <div className={cn('text-xl', text())}>{airplaneName}</div>
      </div>
      <CloseButton onClick={onClose} data-ignore-swipe />
    </div>
    <img
      loading="lazy"
      src={airplaneImage}
      alt={`Plane: ${airplaneName}`}
      title={airplaneName}
      width={600}
      height={300}
      className="w-full h-auto rounded-xl"
    />
  </div>
)
