import styles from "./DropdownItem.module.css";
import textStyles from "../../sharedStyles/Text.module.css";

export interface DropdownItemProps {
  icon?: SVGElement;
  title?: string;
  isSelected?: boolean;
  defaultSelected?: boolean;
  value?: any;
  onClick?: () => void;
}

export default function DropdownItem({
  title,
  isSelected,
  defaultSelected,
  value,
  onClick,
}: DropdownItemProps): JSX.Element {
  return (
    <>
      <button
        onClick={onClick}
        role="option"
        className={`${styles.option} ${isSelected && styles.selected}`}
      >
        <span className={`m-0 ${styles.container}`}>
          <span
            className={`${textStyles["text"]} ${textStyles["size-p16"]} ${textStyles["color-midnight2X343E"]} m-0 ${styles["childText"]} mr-8`}
            title={title}
          >
            <span className={`${styles["childTextPrimary"]}`}>{title}</span>
          </span>
          {isSelected && <SelectedIcon />}
        </span>
      </button>
    </>
  );
}

function SelectedIcon(): JSX.Element {
  return (
    <>
      <svg
        className="Icon_color-black000000__Mlv51 spacing_noMargin__Q_PsJ"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path>
      </svg>
    </>
  );
}
