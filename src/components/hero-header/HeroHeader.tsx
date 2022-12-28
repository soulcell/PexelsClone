import Searchbar from "../searchbar/Searchbar";
import styles from "./HeroHeader.module.css";
import textStyles from "../../sharedStyles/Text.module.css";
import { Photo } from "../../api/interfaces";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export interface HeroHeaderProps {
  photo?: Photo;
}

export default function HeroHeader({ photo }: HeroHeaderProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <header className={`${styles["hero"]} flex m-0 py-80 px-15`}>
        <div
          className={`${styles["content"]} flex flex-direction-column m-0 pt-50`}
        >
          <h1
            className={`${textStyles["text"]} ${textStyles["size-h33"]} ${textStyles["color-whiteFFFFFF"]} m-0 mb-30`}
          >
            {t("components.heroHeader.welcome")}
          </h1>
          <Searchbar />
          <HeroHeaderTrending />
        </div>
        {photo && (
          <>
            <img
              className={`${styles.img} m-0`}
              src={photo.src.landscape}
              alt={photo.alt}
            />
            <HeroHeaderAttribution
              authorName={photo.photographer}
              authorUrl={photo.photographer_url}
            />
          </>
        )}
      </header>
    </>
  );
}

function HeroHeaderTrending(): JSX.Element {
  const { t, i18n } = useTranslation();
  const [trendingSelections, setTrendingSelections] = useState<string[]>([]);

  useEffect(() => {
    const trendingSelectionIds = new Set<number>();
    while (trendingSelectionIds.size < 7) {
      trendingSelectionIds.add(Math.floor(Math.random() * 40));
    }

    setTrendingSelections(
      [...trendingSelectionIds].map((i) => t(`trending.${i}`))
    );
  }, [t, i18n.language]);

  return (
    <>
      <div className={`${styles.trending} m-0 mt-30`}>
        <span
          className={`${textStyles["text"]} ${textStyles["size-p16"]} ${textStyles["weight-semibold"]} ${textStyles["color-whiteFFFFFF"]} m-0 mr-8 ${styles["trendingText"]} ${textStyles["inline"]}`}
        >
          {t("components.heroHeader.trending")}
        </span>
        <ul className={`${styles.trendingList}`}>
          {trendingSelections.map((name, i, arr) => (
            <li key={i}>
              <a
                className={`${textStyles["text"]} ${textStyles["size-p16"]} ${textStyles["weight-semibold"]} ${textStyles["color-whiteFFFFFF"]} m-0 ${textStyles["inline"]} clickable`}
                href={`/search/${name}`}
              >
                <span
                  className={`${textStyles["text"]} ${textStyles["size-inherit"]} ${textStyles["size-inherit-mobile"]} ${textStyles["weight-inherit"]} ${textStyles["color-inherit"]} m-0 ${textStyles["inline"]}`}
                >
                  {name}
                </span>
              </a>
              <span
                className={`${textStyles["text"]} ${textStyles["size-p16"]} ${textStyles["color-whiteFFFFFF"]} m-0 ${textStyles["inline"]}`}
              >
                {i !== arr.length - 1 && ",\u00A0"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

interface HeroHeaderAttributionProps {
  authorName: string;
  authorUrl: string;
}

function HeroHeaderAttribution({
  authorName,
  authorUrl,
}: HeroHeaderAttributionProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <a
        className={`${textStyles["text"]} ${textStyles["size-p14"]} ${textStyles["weight-semibold"]}
     ${textStyles["color-whiteFFFFFF"]} ${styles["attribution"]} ${textStyles["inline"]} clickable m-0`}
        href={authorUrl}
      >
        <p
          className={`${textStyles["text"]} ${textStyles["size-inherit"]} ${textStyles["size-inherit-mobile"]}
       ${textStyles["weight-inherit"]} ${textStyles["color-inherit"]} m-0 ${textStyles["inline"]}`}
        >
          <span className={`${styles["attributionLabel"]}`}>
            {t("components.heroHeader.author")}
          </span>
          &nbsp;
          <span>{authorName}</span>
        </p>
      </a>
    </>
  );
}
