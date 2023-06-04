import React, { ReactElement } from "react";
import styles from "../styles/reportTemplate.module.css";
import LineChart from "./LineChart";

export default function Question({
  number,
  question,
  alternatives,
  children
}: {
  number: number;
  question: string;
  alternatives: (string | number)[];
  children?: ReactElement
}) {
  return (
    <article>
      <p className={styles.question}>
        {number}.- {question}
      </p>
      <div className={styles['separator-center']}>
        <ol className={styles["question__alternatives"]}>
          {alternatives.map((alternative, i) => {
            const letter = {
              0: "A",
              1: "B",
              2: "C",
              3: "D",
              4: "E",
            } as any;
            return (
              <li key={alternative}>
                <span>{`${letter[i]}) `}</span>
                <span>{alternative}</span>
              </li>
            );
          })}
        </ol>
        <div className={styles["question__image"]}>
          {children}
        </div>
      </div>
    </article>
  );
}
