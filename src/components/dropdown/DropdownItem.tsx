import styles from "./DropdownItem.module.css";
import textStyles from "../../sharedStyles/Text.module.css";
import SVG from "../svg/SVG";

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
          {isSelected && <SVG icon="DropdownSelected" />}
        </span>
      </button>
    </>
  );
}
