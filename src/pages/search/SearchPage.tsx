import { useCallback, useEffect, useState } from "react";
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

function SearchPage(): JSX.Element {
  const dispatch = useDispatch();
  const params = useParams();
  const searchString = params["*"]!.split("/")[0];
  const searchResults = useSelector(selectSearchPhotos);

  const { t, i18n } = useTranslation();

  console.log(i18n.language);

  const loadActionCreator = useCallback(
    (page: number) =>
      loadSearchPhotos(searchString, page, undefined, i18n.language),
    [searchString]
  );

  useEffect(() => {
    dispatch(clearSearchPhotos());
    dispatch(loadActionCreator(1));
  }, [searchString, dispatch, loadActionCreator]);

  return (
    <>
      <Navbar isHomePage={false} />
      <div
        className={`${wrapperStyles.maxWidth} ${wrapperStyles.horizontalPadding} mobile-mt-20 tablet-mt-30 desktop-mt-30 mb-30`}
      >
        <h4
          className={`${textStyles["text"]} ${textStyles["size-h49"]} ${textStyles["size-h28-mobile"]} ${textStyles["color-midnight2C343E"]} mt-50 mb-30 ${textStyles["noLineHeight"]}`}
        >
          {!searchResults.loading && !searchResults.photos.length
            ? t("pages.search.notFound", { searchString })
            : t("pages.search.mainHeader", { searchString })}
        </h4>
        <PhotoGrid
          selector={selectSearchPhotos}
          loadActionCreator={loadActionCreator}
        />
        {searchResults.loading && <Loading />}
      </div>
    </>
  );
}

export default SearchPage;
