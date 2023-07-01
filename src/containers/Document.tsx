import React, { ReactNode } from "react";
import styles from "../styles/Doc.module.css";
import getComponent from "@/utils/getComponent";

export default function Document({ childrens }: { childrens: {
  type: string;
  options: any;
 }[]}) {
  // console.log(childrens)
  return (
    <div className={styles.doc} id="doc">
      {childrens?.map(({ type, options }) => getComponent(type, options))}
    </div>
  );
}
