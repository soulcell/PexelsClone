import { useCallback, useEffect, useRef, useState } from "react";
import Searchbar from "../searchbar/Searchbar";

import { Link } from "react-router-dom";
import LanguageSelector from "../language-selector/LanguageSelector";
import SVG from "../svg/SVG";
import styles from "./Navbar.module.css";
import stylesWrapper from "../../sharedStyles/Wrapper.module.css";
import stylesBtn from "../../sharedStyles/Button.module.css";

export interface NavbarProps {
  isHomePage?: boolean;
  scrollThreshold?: number;
}

interface NavbarLogoProps {
  isDark: boolean;
}

type ScreenSize = "Desktop" | "Mobile";

export default function Navbar({
  isHomePage = false,
  scrollThreshold = 500,
}: NavbarProps): JSX.Element {
  const [isFixed, setFixed] = useState(true);
  const [screenSize, setScreenSize] = useState<ScreenSize>("Desktop");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function clickOutsideHandler(e: Event) {
    if (!menuRef.current?.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  }

  const handleResize = useCallback(() => {
    if (window.innerWidth > 900 && screenSize !== "Desktop") {
      setScreenSize("Desktop");
    } else if (window.innerWidth <= 900 && screenSize !== "Mobile") {
      setScreenSize("Mobile");
    } else {
      setScreenSize("Desktop");
    }
  }, [screenSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = useCallback(
    (event: Event) => {
      const isOverScrolled = window.scrollY > scrollThreshold;
      if (isOverScrolled) {
        if (!isFixed) return;
        setFixed(false);
      } else {
        if (isFixed) return;
        setFixed(true);
      }
    },
    [isFixed, scrollThreshold]
  );

  useEffect(() => {
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else setFixed(false);
  }, [handleScroll, isHomePage]);

  return (
    <>
      {isMenuOpen && <div className={styles.fade} />}
      {!isHomePage && <div className={styles.placeholderPadding} />}
      <div
        className={`${styles.container} ${isFixed ? styles.transparent : ""} ${
          styles.homePage
        }`}
      >
        <nav
          className={`m-0 desktop-px-30 mobile-px-8 tablet-px-15 ${styles.flex} ${stylesWrapper.maxWidth}`}
        >
          <div className={styles.left}>
            <NavbarLogo isDark={!isFixed} />
            {isFixed || <Searchbar />}
          </div>
          <div className={styles.right}>
            {screenSize === "Desktop" && <LanguageSelector />}
            {screenSize === "Mobile" && !isMenuOpen && (
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className={`${stylesBtn["button"]} px-20 ${stylesBtn["icon-solo"]} ${stylesBtn["noBorder"]}`}
              >
                <span>
                  <SVG
                    icon="NavbarMenu"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill={!isFixed ? "#000" : "#fff"}
                  />
                </span>
              </button>
            )}
          </div>
        </nav>
        {isMenuOpen && (
          <div ref={menuRef} className="px-15 pt-15">
            <LanguageSelector />
          </div>
        )}
      </div>
    </>
  );
}

function NavbarLogo({ isDark }: NavbarLogoProps): JSX.Element {
  return (
    <Link className={`${styles.logo} clickable link m-0`} to="/">
      <SVG
        width={130}
        height={50}
        className="Display_desktop m-0 desktop-mr-30 mobile-mr-15 tablet-mr-15"
        icon={isDark ? "NavbarLogoDark" : "NavbarLogo"}
      />
    </Link>
  );
}
