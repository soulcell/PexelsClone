import { useTranslation } from "react-i18next";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";

export default function LanguageSelector(): JSX.Element {
  const { t, i18n } = useTranslation();

  function handleChange(value: string) {
    i18n.changeLanguage(value);
  }

  return (
    <Dropdown
      title={t("components.languageSelector.title").toString()}
      onSelectedValueChanged={handleChange}
    >
      <DropdownItem
        title="English"
        value="en-US"
        defaultSelected={i18n.language === "en-US"}
      />
      <DropdownItem
        title="Русский"
        value="ru-RU"
        defaultSelected={i18n.language === "ru-RU"}
      />
    </Dropdown>
  );
}
