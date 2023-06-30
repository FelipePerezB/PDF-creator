import styles from "@/styles/Home.module.css";
import Doc from "@/containers/Doc";
import { ReactElement, useEffect } from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import ConfigButton from "@/components/ConfigButton";
// import ConfigButton from "@/components/ConfigButton";
// import html2pdf from "html2pdf.js";

export default function Home() {
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
      //  else if($container?.clientWidth <= 768){
      //   mediaQuery = 0.9
      // }

      // const componentWith = $container?.clientWidth * mediaQuery;
      $doc.style.width = componentWith + "px";
      $doc.style.fontSize = componentWith * ratio + "px";
    }
  }, []);

  const handleGeneratePdf = async () => {
    const $doc = document.getElementById("doc");
    if ($doc) {
      $doc.style.width = "450px";
      $doc.style.fontSize = "13px";
      $doc.style.gap = "0";
      // const pdf = new html2pdf()
      //   .set({
      //     filename: "Sistema de ecuaciones.pdf",
      //     html2canvas: {
      //       scale: 4, // A mayor escala, mejores gráficos, pero más peso
      //       letterRendering: true,
      //     },
      //     jsPDF: {
      //       unit: "px",
      //       format: "a4",
      //     },
      //   })
      //   .from($doc);
      // await pdf.save();
      const $container = document.querySelector("#doc-container");
      if ($container && $doc) {
        const pixels = 13;
        const docWidth = 450;
        const ratio = pixels / docWidth;

        const componentWith = $container?.clientWidth * 0.9;
        $doc.style.width = componentWith + "px";
        $doc.style.fontSize = componentWith * ratio + "px";
        $doc.style.gap = "1.4em";
      }
    }
  };

  return (
    <main>
      {/* <button className={styles.button} onClick={handleGeneratePdf}>
        Generate PDF
      </button> */}
      <div id="doc-container" className={styles.docs}>
        <Doc />
      </div>
    </main>
  );
}
