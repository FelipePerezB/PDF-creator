import styles from "@/styles/Home.module.css";
import Doc from "@/containers/Doc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [doc, setDoc] = useState({} as any);
  return (
    <>
      <header>
        <nav className={styles.navar}>
          <ul>
            <li className={styles["doc-info"]}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span className={styles["doc-name"]}>Sistema de ecuaciones</span>
            </li>

            <li className={styles.options}>
              <FontAwesomeIcon
                size="xl"
                icon={faSave}
                onClick={() => {
                  localStorage.setItem("Doc", JSON.stringify(doc));
                  console.log(localStorage.getItem("Doc"));
                }}
              />
              <input list={"schemas"} />
              <datalist id="schemas">
                <option value={"RiveroPDF@1.0.0"}></option>
              </datalist>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Doc setDoc={setDoc} />
      </main>
    </>
  );
}
