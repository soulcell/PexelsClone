import { SVGAttributes, useMemo } from "react";

export type SVGIcon =
  | "NavbarLogo"
  | "NavbarLogoDark"
  | "Loading"
  | "Searchbar"
  | "DropdownArrow"
  | "DropdownSelected"
  | "PhotoCardDownload"
  | "PhotoCardLike"
  | "PhotoCardLikeFilled"
  | "NavbarMenu";

export type SVGProps = {
  icon: SVGIcon;
} & SVGAttributes<SVGSVGElement>;

export default function SVG(props: SVGProps) {
  const xlinkHref = useMemo(() => `/icons.svg#${props.icon}`, [props.icon]);
  return (
    <svg {...props}>
      <use xlinkHref={xlinkHref} />
    </svg>
  );
}
