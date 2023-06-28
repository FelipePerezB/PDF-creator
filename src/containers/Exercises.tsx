import React, { Children, ReactElement } from "react";
import styles from "../styles/reportTemplate.module.css";
import Question from "@/components/Question";
import getComponent from "@/utils/getComponent";
import Title from "@/components/Title";
import CustomComponent from "@/components/CustomComponent";

export default function Exercises({
  id,
  questions,
  startsIn,
  isAnEvaluation = false,
}: {
  isAnEvaluation?: boolean;
  startsIn?: string;
  questions: {
    question: string;
    alternatives: string;
    children?: {
      type: string;
      options: any;
    };
  }[];
  id: string;
}) {
  const startNumber = startsIn ?? "1"
  return (
    <CustomComponent active={false} id={id} style={{}}>
      <section className={styles.exercises}>
        {!isAnEvaluation && startNumber === "1" && (
          // <Title text="PÁCTICA" size="h2" />
          <h1 className={styles.subtitle}>{"PRÁCTICA"}</h1>
        )}
        {questions.map(({ question, alternatives, children }, i) => {
          const num = i + 1 + (Number(startNumber) - 1);
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
    </CustomComponent>
  );
}
