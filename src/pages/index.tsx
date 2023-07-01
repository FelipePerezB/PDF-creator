import styles from "@/styles/Home.module.css";
import Doc from "@/containers/Doc";
import { useEffect } from "react";

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
      $doc.style.width = componentWith + "px";
      $doc.style.fontSize = componentWith * ratio + "px";
    }
  }, []);

  return (
    <main>
      <div id="doc-container" className={styles.docs}>
        <Doc />
      </div>
    </main>
  );
}
