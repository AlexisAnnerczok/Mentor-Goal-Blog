import { useEffect } from "react";
import styles from "../styles/label.module.css";

export default function Label(props: any) {
  return (
    <div className={styles.main}>
      <div
        className={styles.label}
        id={"label"}
        style={{
          ["background" as any]: props.color,
          ["border-color" as any]: props.accentColor,
        }}
      >
        <p
          className={styles.labelTxt}
          style={{ ["color" as any]: props.accentColor }}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
}
