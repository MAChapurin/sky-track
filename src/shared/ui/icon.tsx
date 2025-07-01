import type { FC, SVGProps } from "react";
import {
  ArrowDownIcon,
  BackIcon,
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
  SeparatorPlaneIcon,
  SharedIcon,
  SunIcon,
} from "./icons";

const config = {
  arrowDown: ArrowDownIcon,
  back: BackIcon,
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
  separatorPlane: SeparatorPlaneIcon,
  shared: SharedIcon,
  sun: SunIcon,
};

type IconType = keyof typeof config;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const SVGIcon = config[name];
  return <SVGIcon {...props} />;
};
