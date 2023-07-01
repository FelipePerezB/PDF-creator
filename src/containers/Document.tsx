import React, { ReactNode, useEffect } from "react";
import styles from "../styles/Doc.module.css";
import getComponent from "@/utils/getComponent";

export default function Document({ childrens }: { childrens: {
  type: string;
  options: any;
 }[]}) {
  useEffect(() => {
    const $doc = document.getElementById("doc");
    const $container = document.querySelector("#doc-container");
    if ($container && $doc) {
      const pixels = 13;
      const docWidth = 450;
      const ratio = pixels / docWidth;
      let componentWith;

      if ($container?.clientWidth <= 425) {
        componentWith = $container?.clientWidth * 0.95;
      } else if ($container?.clientWidth <= 1024) {
        componentWith = $container?.clientWidth * 0.7;
      } else {
        componentWith = 700;
      }
      $doc.style.width = componentWith + "px";
      $doc.style.fontSize = componentWith * ratio + "px";
    }
  }, []);
  return (
    <div className={styles.doc} id="doc">
      {childrens?.map(({ type, options }) => getComponent(type, options))}
    </div>
  );
}
