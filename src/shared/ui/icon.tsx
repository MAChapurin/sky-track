import type { FC, SVGProps } from 'react'
import {
  ArrowDownIcon,
  ArrowDownWideNarrowIcon,
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
  LocationIcon,
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
  arrowDownWide: ArrowDownWideNarrowIcon,
  arrowGroup: ArrowGroupIcon,
  back: BackIcon,
  bookmark: BookmarkIcon,
  checked: CheckedIcon,
  close: CloseIcon,
  columns: ColumnsIcon,
  favorites: FavoritesIcon,
  follow: FollowIcon,
  home: HomeIcon,
  location: LocationIcon,
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
