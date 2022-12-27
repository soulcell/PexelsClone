import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Photo } from "../api/interfaces";
import HeroHeader from "../components/hero-header/HeroHeader";
import Navbar from "../components/navbar/Navbar";
import PhotoGrid from "../components/photo-grid/PhotoGrid";
import { loadCuratedPhotos } from "../redux/actionCreators/curatedActionCreators";
import {
  clearSearchPhotos,
  loadSearchPhotos,
} from "../redux/actionCreators/searchActionCreators";
import { CuratedPhotosState } from "../redux/reducers/photos/curated/reducer";
import selectCuratedPhotos from "../redux/reducers/photos/curated/selector";
import { PhotosState } from "../redux/reducers/photos/interfaces";
import { SearchPhotosState } from "../redux/reducers/photos/search/reducer";
import selectSearchPhotos from "../redux/reducers/photos/search/selector";
import wrapperStyles from "../sharedStyles/Wrapper.module.css";
import textStyles from "../sharedStyles/Text.module.css";
import Filters from "../components/filters/Filters";
import Loading from "../components/loader/Loading";
import { AppState } from "../redux/reducers/rootReducer";

export type PageType = "Home" | "Search";

export interface PageProps {
  type: PageType;
}

export default function Page({ type }: PageProps) {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const params = useParams();
  const searchString = useMemo(() => {
    if (type === "Search") {
      return params["*"]!.split("/")[0];
    } else return;
  }, [params]);
  const headerPhotoIdx = useMemo(() => Math.floor(Math.random() * 12), []);
  const [headerPhoto, setHeaderPhoto] = useState<Photo | undefined>(undefined);

  let selector: CuratedPhotosState | SearchPhotosState;
  let loadActionCreator: (page: number) => any;
  let selectFunction: (
    state: AppState
  ) => CuratedPhotosState | SearchPhotosState;

  switch (type) {
    case "Search":
      selectFunction = selectSearchPhotos;
      break;
    case "Home":
    default:
      selectFunction = selectSearchPhotos;
      break;
  }

  selector = useSelector(selectFunction);

  loadActionCreator = useCallback(
    (page: number) => {
      switch (type) {
        case "Search":
          return loadSearchPhotos(
            searchString as string,
            page,
            undefined,
            i18n.language,
            (selector as SearchPhotosState).searchOrientation,
            (selector as SearchPhotosState).searchSize
          );

        case "Home":
          return loadCuratedPhotos;
        default:
          return loadCuratedPhotos;
      }
    },
    [
      type,
      searchString,
      (selector as SearchPhotosState).searchOrientation,
      (selector as SearchPhotosState).searchSize,
    ]
  );

  useEffect(() => {
    if (type === "Search") {
      dispatch(clearSearchPhotos());
    }
    dispatch(loadActionCreator(1));
  }, [type, searchString, dispatch, loadActionCreator]);

  useEffect(() => {
    if (type !== "Home") return;
    if (!headerPhoto) setHeaderPhoto(selector.photos[headerPhotoIdx]);
  }, [type, selector.photos, headerPhoto, headerPhotoIdx]);

  return (
    <>
      <Navbar isHomePage={type === "Home"} />
      {type === "Home" && <HeroHeader photo={headerPhoto} />}
      <main
        className={`${wrapperStyles.maxWidth} ${wrapperStyles.horizontalPadding} mobile-mt-20 tablet-mt-30 desktop-mt-30 mb-30`}
      >
        {type === "Home" && (
          <h4
            className={`${textStyles["text"]} ${textStyles["size-h23"]} ${textStyles["color-midnight2C343E"]} mt-15 mb-30 ${textStyles["noLineHeight"]}`}
          >
            {t("pages.home.mainHeader")}
          </h4>
        )}
        {type === "Search" && (
          <h4
            className={`${textStyles["text"]} ${textStyles["size-h49"]} ${textStyles["size-h28-mobile"]} ${textStyles["color-midnight2C343E"]} mt-50 mb-30 ${textStyles["noLineHeight"]}`}
          >
            {!selector.loading && !selector.photos.length
              ? t("pages.search.notFound", { searchString })
              : t("pages.search.mainHeader", { searchString })}
          </h4>
        )}
        {type === "Search" && <Filters />}
        <PhotoGrid
          selector={selectFunction}
          loadActionCreator={loadActionCreator}
        />
        {selector.loading && <Loading />}
      </main>
    </>
  );
}
