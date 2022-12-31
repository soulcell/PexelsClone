import styles from "./Loading.module.css";

export interface LoadingProps {
  size?: number;
  color?: string;
}

export default function Loading({
  size = 200,
  color = "#222",
}: LoadingProps): JSX.Element {
  return (
    <div className={styles["root"]}>
      <div
        style={{ width: size, height: size }}
        className={styles["loadingio-spinner-spinner-tlce58hty5"]}
      >
        <div
          style={{ transform: `scale(${size / 200})` }}
          className={styles["ldio-ouxrbfu7gz"]}
        >
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
        </div>
      </div>
    </div>
  );
}
