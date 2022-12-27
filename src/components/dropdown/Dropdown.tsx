import {
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";
import styles from "./Dropdown.module.css";
import btnStyles from "../../sharedStyles/Button.module.css";
import { DropdownItemProps } from "./DropdownItem";
import SVG from "../svg/SVG";

export interface DropdownProps {
  title?: string;
  children?: React.ReactNode;
  onSelectedValueChanged?: (value: any) => void;
}

export default function Dropdown(props: DropdownProps): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [title, setTitle] = useState(props.title);

  useEffect(() => {
    let el = Children.toArray(props.children)[selectedIndex];
    if (isValidElement<DropdownItemProps>(el)) {
      setSelectedValue(el.props.value);
      setTitle(el.props.title);
    }
  }, [selectedIndex, props.children]);

  useEffect(() => {
    if (props.onSelectedValueChanged) {
      props.onSelectedValueChanged(selectedValue);
    }
  }, [selectedValue]);

  const triggerRef = useRef<HTMLDivElement>(null);
  function handler(e: Event) {
    if (!triggerRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  }
  useEffect(() => {
    let idx = 0;
    const values = Children.map(props.children, (child, index) => {
      if (isValidElement(child)) {
        if (child.props.defaultSelected) {
          idx = index;
        }
        return child.props.value;
      }
    });
    if (values) {
      setSelectedIndex(idx);
    }

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <div
        ref={triggerRef}
        className={`${styles["outerDiv"]} ${styles["fullWidth"]}`}
      >
        <div className={`${styles["wrapper"]} ${isOpen && styles["isOpen"]}`}>
          <div className={`${styles["inlineWrapper"]}`}>
            <button
              onClick={() => setOpen(!isOpen)}
              className={`${btnStyles["button"]} ${btnStyles["white"]} ${styles["toggleButton"]} px-20`}
              style={{ width: "100%" }}
            >
              <span className={`${isOpen && btnStyles["rotateIcon"]}`}>
                <span className={btnStyles["text"]}>{title}</span>
                <SVG
                  icon="DropdownArrow"
                  style={{ alignSelf: "flex-end", marginRight: "-5px" }}
                />
              </span>
            </button>
            <ul
              role="listbox"
              tabIndex={-1}
              className={styles.menu}
              dataset-select-dropdown="true"
            >
              {Children.map(props.children, (child, index) => {
                if (isValidElement(child)) {
                  return cloneElement(
                    child as ReactElement<DropdownItemProps>,
                    {
                      isSelected: index === selectedIndex,
                      onClick: () => {
                        setSelectedIndex(index);
                      },
                    }
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
