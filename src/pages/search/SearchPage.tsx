import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import PhotoGrid from "../../components/photo-grid/PhotoGrid";
import {
  clearSearchPhotos,
  loadSearchPhotos,
} from "../../redux/actionCreators/searchActionCreators";
import selectSearchPhotos from "../../redux/reducers/photos/search/selector";
import wrapperStyles from "../../sharedStyles/Wrapper.module.css";

function SearchPage(): JSX.Element {
  const dispatch = useDispatch();
  const params = useParams();
  const searchString = params["*"]!.split("/")[0];

  const { i18n } = useTranslation();

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
      {searchString}
      <div
        className={`${wrapperStyles.maxWidth} ${wrapperStyles.horizontalPadding} mobile-mt-20 tablet-mt-30 desktop-mt-30 mb-30`}
      >
        <PhotoGrid
          selector={selectSearchPhotos}
          loadActionCreator={loadActionCreator}
        />
      </div>
    </>
  );
}

export default SearchPage;
