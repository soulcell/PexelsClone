import SVG from "../svg/SVG";
import styles from "./Loading.module.css";

export default function Loading(): JSX.Element {
  return (
    <>
      <div className={styles.root}>
        <SVG icon="Loading" />
      </div>
    </>
  );
}
