import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import ReportTemplate from "./reportTemplate";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const reportTemplateRef = useRef(null) as any;
  const [frame, setFrame] = useState();

  // const img = new Image()

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    const img = document.createElement('img');
    img.src = "/pudin.png";
    const canvas = document.getElementById("chart-1") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    ctx?.drawImage(img, 0, 0);
    const imageData = canvas.toDataURL("image/png");

    const { x, y, height, width } = canvas.getBoundingClientRect();
    doc.addImage(imageData, "PNG", x, y, x + width, y + height);

    // Adding the fonts.
    doc.addFont("/Static/Nunito-Regular.ttf", "Nunito", "normal");
    doc.addFont("/Static/Nunito-Bold.ttf", "Nunito", "bold");
    doc.addFont("/Static/Nunito-ExtraBold.ttf", "Nunito", "bolditalic");
    doc.setFont("Nunito", "normal");

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        setFrame(doc.output("bloburl") as any);
        console.log(doc.getFontList());
      },
    });
  };

  return (
    <main>
      <button className={styles.button} onClick={handleGeneratePdf}>
        Generate PDF
      </button>
      <div className={styles.docs}>
        <div ref={reportTemplateRef}>
          <ReportTemplate />
        </div>
        ({frame && <iframe className={styles.frame} src={frame}></iframe>})
      </div>
    </main>
  );
}
