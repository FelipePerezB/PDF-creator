import styles from "@/styles/Home.module.css";
import Doc from "@/containers/Doc";
import { useEffect } from "react";

export default function Home() {
  return (
    <main>
      <div id="doc-container" className={styles.docs}>
        <Doc />
      </div>
    </main>
  );
}
