import React, { Children, ReactElement } from "react";
import styles from "../styles/reportTemplate.module.css";
import getComponent from "@/utils/getComponent";

export default function Columns({
  childrens,
}: {
  childrens: {
    type: string;
    options: any;
  }[];
}) {
  return (
    <section className={styles.separator}>
      {childrens.map(({ type, options }) => getComponent(type, options))}
    </section>
  );
}
