import { CSSProperties, useMemo } from "react";

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

export interface SVGProps {
  icon: SVGIcon;
  style?: CSSProperties;
}

export default function SVG({ icon, style }: SVGProps) {
  const xlinkHref = useMemo(() => `/icons.svg#${icon}`, [icon]);

  switch (icon) {
    case "NavbarLogo":
      return (
        <svg
          style={style}
          width="130"
          height="50"
          className="Display_desktop m-0 desktop-mr-30 mobile-mr-15 tablet-mr-15"
        >
          <use xlinkHref={xlinkHref} />
        </svg>
      );
    case "NavbarLogoDark":
      return (
        <svg
          style={style}
          width="130"
          height="50"
          className="Display_desktop m-0 desktop-mr-30 mobile-mr-15 tablet-mr-15"
        >
          <use xlinkHref={xlinkHref} />
        </svg>
      );
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
    case "Searchbar":
      return (
        <svg
          style={style}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <use xlinkHref={xlinkHref} />
        </svg>
      );
    case "DropdownArrow":
      return (
        <svg style={style} viewBox="0 0 24 24" width="24" height="24">
          <use xlinkHref={xlinkHref} />
        </svg>
      );
    case "DropdownSelected":
      return (
        <svg
          className="Icon_color-black000000__Mlv51 spacing_noMargin__Q_PsJ"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <use xlinkHref={xlinkHref} />
        </svg>
      );
    case "PhotoCardDownload":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          height="100px"
          width="100px"
          fill="#000000"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          xmlSpace="preserve"
        >
          <use xlinkHref={xlinkHref} />
        </svg>
      );
    case "PhotoCardLike":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <use xlinkHref={xlinkHref} />
        </svg>
      );
    case "PhotoCardLikeFilled":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <use xlinkHref={xlinkHref} />
        </svg>
      );
    default:
      return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref={xlinkHref} />
        </svg>
      );
  }
}
