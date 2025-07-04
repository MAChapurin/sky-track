import type { FC, SVGProps } from 'react'
import {
  ArrowDownIcon,
  ArrowGroupIcon,
  BackIcon,
  BookmarkIcon,
  CheckedIcon,
  CloseIcon,
  ColumnsIcon,
  FavoritesIcon,
  FlightRadarIcon,
  FollowIcon,
  HomeIcon,
  MoonIcon,
  MoreIcon,
  PlaneIcon,
  ProfileIcon,
  RouteIcon,
  SearchIcon,
  SeparatorPlaneIcon,
  SharedIcon,
  SunIcon
} from './icons'

const config = {
  arrowDown: ArrowDownIcon,
  arrowGroup: ArrowGroupIcon,
  back: BackIcon,
  bookmark: BookmarkIcon,
  checked: CheckedIcon,
  close: CloseIcon,
  columns: ColumnsIcon,
  favorites: FavoritesIcon,
  follow: FollowIcon,
  home: HomeIcon,
  logo: FlightRadarIcon,
  moon: MoonIcon,
  more: MoreIcon,
  plane: PlaneIcon,
  profile: ProfileIcon,
  route: RouteIcon,
  search: SearchIcon,
  separatorPlane: SeparatorPlaneIcon,
  shared: SharedIcon,
  sun: SunIcon
}

type IconType = keyof typeof config

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const SVGIcon = config[name]
  return <SVGIcon {...props} />
}
