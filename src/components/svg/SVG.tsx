import { CSSProperties, SVGAttributes, useMemo } from "react";

export type SVGIcon =
  | "NavbarLogo"
  | "NavbarLogoDark"
  | "Loading"
  | "Searchbar"
  | "DropdownArrow"
  | "DropdownSelected"
  | "PhotoCardDownload"
  | "PhotoCardLike"
  | "PhotoCardLikeFilled";

export type SVGProps = {
  icon: SVGIcon;
} & SVGAttributes<SVGSVGElement>;

export default function SVG(props: SVGProps) {
  const { icon, style } = props;
  const xlinkHref = useMemo(() => `/icons.svg#${icon}`, [icon]);

  switch (icon) {
    case "Loading":
      return (
        <svg
          style={style}
          version="1.1"
          id="L4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
          xmlSpace="preserve"
        >
          <circle stroke="none" cx="6" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle stroke="none" cx="26" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle stroke="none" cx="46" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <use xlinkHref={xlinkHref} />
        </svg>
      );
  }
}
