import React, { ReactElement, ReactNode } from "react";
import styles from "../styles/reportTemplate.module.css";
import DocInfo from "@/components/DocInfo";

export default function Page({
  children,
  index,
}: {
  index: number;
  children: ReactElement;
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      id={"page-" + index}
      className={styles.page}
    >
      {/* {isFirstPage && <DocInfo/>} */}
      {children}
    </div>
  );
}
