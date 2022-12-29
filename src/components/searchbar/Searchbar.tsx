import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import selectSearchPhotos from "../../redux/reducers/photos/search/selector";
import SVG from "../svg/SVG";
import styles from "./Searchbar.module.css";

export default function Searchbar(): JSX.Element {
  const searchPhotos = useSelector(selectSearchPhotos);
  const [initialSearchString, setInitialSearchString] = useState("");

  useEffect(() => {
    setInitialSearchString(searchPhotos.searchString);
  }, [searchPhotos.searchString]);

  const [searchString, setSearchString] = useState(initialSearchString);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchString(event.currentTarget.value);
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate(`/search/${searchString}`);
    },
    [searchString, navigate]
  );

  return (
    <form
      className={`${styles.form} m-0`}
      role="search"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className={styles.container}>
        <input
          defaultValue={initialSearchString}
          className={styles.input}
          type="search"
          autoCapitalize="none"
          autoComplete="off"
          autoFocus
          placeholder={t("components.searchbar.placeholder").toString()}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          <SVG icon="Searchbar" />
        </button>
      </div>
    </form>
  );
}
