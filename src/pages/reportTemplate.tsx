/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import styles from "../styles/reportTemplate.module.css";
const ReportTemplate = () => {
  const stylesa = {
    page: {},

    columnLayout: {
      display: "flex",
      justifyContent: "space-between",
      margin: "3rem 0 5rem 0",
      gap: "2rem",
    },

    column: {
      display: "flex",
      flexDirection: "column",
    },

    spacer2: {
      height: "2rem",
    },

    fullWidth: {
      width: "100%",
    },

    marginb0: {
      marginBottom: 0,
    },
    text: {},
  };
  return (
    <>
      <div className={styles.page}>
        <section className={styles["doc-info"]}>
          <h1 className={styles.title}>SISTEMA DE ECUACIONES</h1>
          <h2 className={styles.subtitle}>ANÁLISIS DE SOLUCIONES</h2>
        </section>
        <section>
          <h2 className={styles.subtitle}>REPRESENTACIÓN GRÁFICA</h2>
          <canvas id="chart-1"></canvas>
        </section>
      </div>
    </>
  );
};

export default ReportTemplate;
