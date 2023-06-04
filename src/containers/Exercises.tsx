import React, { Children, ReactElement } from "react";
import styles from "../styles/reportTemplate.module.css";
import Question from "@/components/Question";
import getComponent from "@/utils/getComponent";

export default function Exercises({
  questions,
  startsIn = 1,
  isAnEvaluation = false,
}: {
  isAnEvaluation?: boolean;
  startsIn?: number;
  questions: {
    question: string;
    alternatives: (number | string)[];
    children?: {
      type: string;
      options: any;
    };
  }[];
}) {
  return (
    <section className={styles.exercises}>
      {!isAnEvaluation && startsIn === 1 && (
        <h2 className={styles.subtitle}>PRÁCTICA</h2>
      )}
      {questions.map(({ question, alternatives, children }, i) => {
        const num = i + 1 + (startsIn - 1);
        return (
          <Question
            key={`question-${num}-${question.substring(10)}}`}
            number={num}
            question={question}
            alternatives={alternatives}
          >
            {children && getComponent(children?.type, children?.options)}
          </Question>
        );
      })}
    </section>
  );
}
