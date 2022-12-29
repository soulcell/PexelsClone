import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import PhotoGrid from "../../components/photo-grid/PhotoGrid";
import {
  clearSearchPhotos,
  loadSearchPhotos,
} from "../../redux/actionCreators/searchActionCreators";
import selectSearchPhotos from "../../redux/reducers/photos/search/selector";
import wrapperStyles from "../../sharedStyles/Wrapper.module.css";
import textStyles from "../../sharedStyles/Text.module.css";
import Loading from "../../components/loader/Loading";
import Filters from "../../components/filters/Filters";

function SearchPage(): JSX.Element {
  const dispatch = useDispatch();
  const params = useParams();
  const searchString = useMemo(() => params["*"]!.split("/")[0], [params]);
  const searchSelector = useSelector(selectSearchPhotos);

  const { t, i18n } = useTranslation();

  const dispatchLoad = useCallback(
    (page: number) =>
      dispatch(
        loadSearchPhotos(
          searchString,
          page,
          undefined,
          i18n.language,
          searchSelector.searchOrientation,
          searchSelector.searchSize
        )
      ),
    [
      dispatch,
      searchString,
      i18n.language,
      searchSelector.searchOrientation,
      searchSelector.searchSize,
    ]
  );

  useEffect(() => {
    dispatch(clearSearchPhotos());
    dispatchLoad(1);

    return () => {
      console.log("clearing");
      dispatch(clearSearchPhotos());
    };
  }, [dispatch, dispatchLoad]);

  return (
    <>
      <Navbar />
      <div
        className={`${wrapperStyles.maxWidth} ${wrapperStyles.horizontalPadding} mobile-mt-20 tablet-mt-30 desktop-mt-30 mb-30`}
      >
        <h4
          className={`${textStyles["text"]} ${textStyles["size-h49"]} ${textStyles["size-h28-mobile"]} ${textStyles["color-midnight2C343E"]} mt-50 mb-30 ${textStyles["noLineHeight"]}`}
        >
          {!searchSelector.loading && !searchSelector.photos.length
            ? t("pages.search.notFound", { searchString })
            : t("pages.search.mainHeader", { searchString })}
        </h4>
        <Filters />
        <PhotoGrid selector={selectSearchPhotos} dispatchLoad={dispatchLoad} />
        {searchSelector.loading && <Loading />}
      </div>
    </>
  );
}

export default SearchPage;
