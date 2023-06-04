import React from "react";
import styles from "../styles/reportTemplate.module.css";

export default function Title({ text }: { text: string }) {
  return <h2 className={styles.subtitle}>{text}</h2>;
}
