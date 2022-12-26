import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchOrientation,
  setSearchSize,
} from "../../redux/actionCreators/searchActionCreators";
import selectSearchPhotos from "../../redux/reducers/photos/search/selector";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";
import styles from "./Filters.module.css";

export default function Filters(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleChangeOrientation(value: string) {
    dispatch(setSearchOrientation(value));
  }

  function handleChangeSize(value: string) {
    dispatch(setSearchSize(value));
  }

  return (
    <>
      <div className={`${styles.container} m-0 mb-30`}>
        <div className={styles.grid}>
          <Dropdown onSelectedValueChanged={handleChangeOrientation}>
            <DropdownItem
              title={t("components.filters.orientation.all").toString()}
              defaultSelected={true}
              value=""
            />
            <DropdownItem
              title={t("components.filters.orientation.horizontal").toString()}
              value="horizontal"
            />
            <DropdownItem
              title={t("components.filters.orientation.portrait").toString()}
              value="portrait"
            />
            <DropdownItem
              title={t("components.filters.orientation.square").toString()}
              value="square"
            />
          </Dropdown>
          <Dropdown onSelectedValueChanged={handleChangeSize}>
            <DropdownItem
              title={t("components.filters.size.all").toString()}
              defaultSelected={true}
              value=""
            />
            <DropdownItem
              title={t("components.filters.size.large").toString()}
              value="large"
            />
            <DropdownItem
              title={t("components.filters.size.medium").toString()}
              value="medium"
            />
            <DropdownItem
              title={t("components.filters.size.small").toString()}
              value="small"
            />
          </Dropdown>
        </div>
      </div>
    </>
  );
}
