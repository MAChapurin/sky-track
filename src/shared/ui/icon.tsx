import type { FC, SVGProps } from "react";
import {
  FollowIcon,
  MoreIcon,
  PlaneIcon,
  RouteIcon,
  SeparatorPlaneIcon,
  SharedIcon,
} from "./icons";

const config = {
  more: MoreIcon,
  plane: PlaneIcon,
  separatorPlane: SeparatorPlaneIcon,
  route: RouteIcon,
  follow: FollowIcon,
  shared: SharedIcon,
};

type IconType = keyof typeof config;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const SVGIcon = config[name];
  return <SVGIcon {...props} />;
};
