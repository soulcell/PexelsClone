import { useCallback, useEffect, useState } from "react";
import Searchbar from "../searchbar/Searchbar";
import styles from "./Navbar.module.css";
import stylesWrapper from "../../sharedStyles/Wrapper.module.css";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../language-selector/LanguageSelector";
import SVG from "../svg/SVG";

export interface NavbarProps {
  isHomePage: boolean;
  scrollThreshold?: number;
}

interface NavbarLogoProps {
  isDark: boolean;
}

export default function Navbar({
  isHomePage = false,
  scrollThreshold = 500,
}: NavbarProps): JSX.Element {
  const [isFixed, setFixed] = useState(true);

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
      {!isHomePage && <div className={styles.placeholderPadding}></div>}
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
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </>
  );
}

function NavbarLogo({ isDark }: NavbarLogoProps): JSX.Element {
  return (
    <>
      <Link className={`${styles.logo} clickable link m-0`} to="/">
        <SVG icon={isDark ? "NavbarLogoDark" : "NavbarLogo"} />
      </Link>
    </>
  );
}
