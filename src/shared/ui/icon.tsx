import type { FC, SVGProps } from "react";
import {
  BackIcon,
  CloseIcon,
  FollowIcon,
  HomeIcon,
  MoonIcon,
  MoreIcon,
  PlaneIcon,
  RouteIcon,
  SeparatorPlaneIcon,
  SharedIcon,
  SunIcon,
} from "./icons";

const config = {
  back: BackIcon,
  close: CloseIcon,
  follow: FollowIcon,
  home: HomeIcon,
  moon: MoonIcon,
  more: MoreIcon,
  plane: PlaneIcon,
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
