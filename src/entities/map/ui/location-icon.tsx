import { Icon } from '@/shared/ui'
import ReactDOMServer from 'react-dom/server'
import L from 'leaflet'

export const locationIcon = L.divIcon({
  html: ReactDOMServer.renderToStaticMarkup(
    <Icon
      name="location"
      className="text-black dark:text-white -translate-y-1/2"
    />
  ),
  className: '',
  iconSize: [24, 24]
})
