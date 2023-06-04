import React, { ReactElement } from "react";
import styles from "../styles/reportTemplate.module.css";
import Page from "./Page";
import Title from "@/components/Title";
import Columns from "./Columns";
import getComponent from "@/utils/getComponent";
import DocInfo from "@/components/DocInfo";

export default function Doc() {
  const pages = [
    [
      {
        type: "title",
        options: {
          text: "REPRESENTACIÓN",
          size: "h2",
        },
      },
      {
        type: "paragraph",
        options: {
          text: "Un sistema de ecuaciones es un conjunto de dos o más ecuaciones que se resuelven al mismo tiempo para encontrar los valores desconocidos.",
        },
      },
      {
        type: "columns",
        options: {
          childrens: [
            {
              type: "lineChart",
              options: {
                ecuations: [{}, { m: -1, n: 4 }],
              },
            },
            {
              type: "div",
              options: {
                childrens: [
                  {
                    type: "paragraph",
                    options: {
                      text: "Por ejemplo, en el sistema de ecuaciones:",
                    },
                  },
                  {
                    type: "SLE",
                    options: {
                      ec1: "x - y = 0",
                      ec2: "x + y = 4",
                    },
                  },
                  {
                    type: "paragraph",
                    options: {
                      text: "La solución se encontará en la intersección entre ambas ecuaciones, en este caso, en el punto (2, 2).",
                    },
                  },
                  {
                    type: "SLE",
                    options: {
                      ec1: "2 - 2 = 0",
                      ec2: "2 + 2 = 4",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        type: "exercises",
        options: {
          questions: [
            {
              question:
                "Si 2 rectas intersectan en el punto (4, 5), ¿cúal es la solución a su sistema de ecuaciones?",
              alternatives: ["(4, 5)", "(5, 4)", "(2, 2)", "No tiene solución"],
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: {
                type: "lineChart",
                options: {
                  size: "small",
                  ecuations: [{}, { n: 2 }],
                },
              },
              // <LineChart
              //   size="small"
              //   ecuations={[
              //     {
              //       m: 1,
              //       n: 0,
              //     },
              //     {
              //       m: 1,
              //       n: 2,
              //     },
              //   ]}
              // />
              // ),
            },
          ],
        },
      },
    ],
  ];
  // const doc =
  return (
    <div>
      {pages.map((page, i) => (
        <Page key={"page-" + i}>
          <>
          {i===0 && <DocInfo/>}
          {page.map(({ type, options }) => getComponent(type, options))}
          </>
        </Page>
      ))}
    </div>
  );
}
