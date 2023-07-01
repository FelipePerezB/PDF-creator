import React, { ReactNode, useEffect } from "react";
import styles from "../styles/Doc.module.css";
import getComponent from "@/utils/getComponent";
import resize from "@/utils/ResizePDF";

export default function Document({
  childrens,
}: {
  childrens: {
    type: string;
    options: any;
  }[];
}) {
  useEffect(() => {
    resize(0.5);
  }, []);
  return (
    <div className={styles.doc} id="doc">
      {childrens?.map(({ type, options }) => getComponent(type, options))}
    </div>
  );
}
