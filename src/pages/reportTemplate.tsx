/* eslint-disable @next/next/no-img-element */
import styles from "../styles/reportTemplate.module.css";
import SLE from "@/components/SLE";
import LineChart from "@/components/LineChart";
import Exercises from "@/containers/Exercises";
import Page from "@/containers/Page";
import Fraction from "@/components/Fraction";
import Equality from "@/components/Equality";
import Columns from "@/containers/Columns";
import Doc from "@/containers/Doc";

const ReportTemplate = () => {
  return (
    <div id="doc">
      <Doc />
      <Page isFirstPage={true}>
        <>
          <section>
            <h2 className={styles.subtitle}>REPRESENTACIÓN</h2>
            <p className={styles.paragrah}>
              Un sistema de ecuaciones es un conjunto de dos o más ecuaciones
              que se resuelven al mismo tiempo para encontrar los valores
              desconocidos.
            </p>
            {/* <Columns> */}
            {/* <>
                <LineChart ecuations={[{}, { m: -1, n: 4 }]} />
                <div>
                  <p className={styles.paragrah}>
                    Por ejemplo, en el sistema de ecuaciones:
                  </p>
                  <SLE ec1="x - y = 0" ec2="x + y = 4" />
                  <p className={styles.paragrah}>
                    La solución se encontará en la intersección entre ambas
                    ecuaciones, en este caso, en el punto (2, 2).
                  </p>
                  <SLE ec1="2 - 2 = 0" ec2="2 + 2 = 4" />
                </div>
              </> */}
            {/* </Columns> */}
          </section>
          {/* <Exercises
            questions={[
              {
                question:
                  "Si 2 rectas intersectan en el punto (4, 5), ¿cúal es la solución a su sistema de ecuaciones?",
                alternatives: [
                  "(4, 5)",
                  "(5, 4)",
                  "(2, 2)",
                  "No tiene solución",
                ],
              },
              {
                question:
                  "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
                alternatives: [0, 1, 2, "Infinitas"],
                children: (
                  <LineChart
                    size="small"
                    ecuations={[
                      {
                        m: 1,
                        n: 0,
                      },
                      {
                        m: 1,
                        n: 2,
                      },
                    ]}
                  />
                ),
              },
            ]}
          /> */}
        </>
      </Page>
      {/* <Page>
        <Exercises
          startsIn={3}
          questions={[
            {
              question:
                "Si el par ordenado (8, 2) es la solución del siguiente sistema de ecuaciones, el valor de c y d debe ser, respectivamente:",
              alternatives: ["16 y 8", "10 y 5", "2 y 10", "22 y 38"],
              children: <SLE ec1="x + 7y = c" ec2="3x + 4y = d" />,
            },
            {
              question:
                "¿Cúal es la solución del siguiente sistema de ecuaciones?",
              alternatives: [
                "No tiene solución",
                "(0, 0)",
                "(4, 2)",
                "Tiene infinitas soluciones",
              ],
              children: (
                <LineChart
                  size="small"
                  ecuations={[
                    {
                      m: 0.5,
                    },
                    {
                      m: -0.5,
                      n: 4,
                    },
                  ]}
                />
              ),
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: (
                <LineChart
                  size="small"
                  ecuations={[
                    {
                      m: 2,
                      n: 6,
                    },
                    {
                      n: 8,
                    },
                  ]}
                />
              ),
            },
            {
              question:
                "¿Cual es la solución del siguiente sistema de ecuaciones?",
              alternatives: [
                "(2, 4)",
                "(-2, 9)",
                "(9, -2)",
                "No tiene solución",
              ],
              children: <SLE ec1="x + 2y = 5" ec2="2x + 3y = 12" />,
            },
            {
              question:
                "Para que el par ordenado (2, 3) sea la solución del siguiente sistema de ecuaciones, el valor de a y b debe ser, respectivamente:",
              alternatives: ["2 y 4", "4 y 2", "10 y 1", "7 y 2"],
              children: <SLE ec1="ax + 4y = 16" ec2="2x + by = 12" />,
            },
          ]}
        />
      </Page> */}
      <Page>
        <>
          <h2 className={styles.subtitle}>ANALISIS DE SOLUCIONES</h2>
          <p style={{ textAlign: "center" }}>
            El siguiente sistema de ecuaciones lineales puede tener:
            {/* <SLE ec1="a₁x + b₁y = c₁" ec2="a₂x + b₂y = c₂" /> */}
          </p>
          <section className={styles.separator} style={{ gap: "28px" }}>
            <div>
              <p className={styles.paragrah}>
                Ninguna solución: 2 rectas paralelas que no intersectan.
              </p>
              <LineChart size="small" ecuations={[{ n: 1 }, { n: 3 }]} />
              <Equality
                withBorder={true}
                values={[
                  <Fraction key={"a₁"} numerator={"a₁"} denominator={"a₂"} />,
                  <Fraction key={"b₁"} numerator={"b₁"} denominator={"b₂"} />,
                  <Fraction key={"c₁"} numerator={"c₁"} denominator={"c₂"} />,
                ]}
                exception={{
                  sign: "≠",
                  index: 1,
                }}
                sign="="
              />
            </div>
            <div>
              <p className={styles.paragrah}>
                Solución única: 2 rectas secantes que intersectan en un punto:
              </p>
              <LineChart size="small" ecuations={[{}, { m: -1, n: 6 }]} />
              <Equality
                withBorder={true}
                values={[
                  <Fraction key={"a₁"} numerator={"a₁"} denominator={"a₂"} />,
                  <Fraction key={"b₁"} numerator={"b₁"} denominator={"b₂"} />,
                ]}
                sign="≠"
              />
            </div>
            <div>
              <p contentEditable={true} className={styles.paragrah}>
                Infinitas soluciones: 2 rectas que intersectan en todos sus
                puntos:
              </p>
              <LineChart size="small" ecuations={[{ m: 1, n: 0 }]} />
              <Equality
                withBorder={true}
                values={[
                  <Fraction key={"a₁"} numerator={"a₁"} denominator={"a₂"} />,
                  <Fraction key={"b₁"} numerator={"b₁"} denominator={"b₂"} />,
                  <Fraction key={"c₁"} numerator={"c₁"} denominator={"c₂"} />,
                ]}
                sign="="
              />
            </div>
          </section>
          <section>
            <p style={{ margin: "16px 0 8px" }} className={styles.subtitle}>
              EJEMPLO:
            </p>
            <Equality
              values={[
                <SLE key={"gwgyuqgs"} ec1="2x + 3y = 10" ec2="1x + 4y = 8" />,
                <Equality
                  key={"gwgyuqgs"}
                  values={[
                    <Fraction key={"22"} numerator={"2x"} denominator={"1x"} />,
                    <Fraction key={"32"} numerator={"3y"} denominator={"2y"} />,
                  ]}
                  sign="≠"
                />,
                <LineChart
                  key={"BWBYU"}
                  size="small"
                  ecuations={[
                    { m: -0.25, n: 2 },
                    { m: -(2 / 3), n: 10 / 3 },
                  ]}
                />,
              ]}
              sign="--->"
            />
          </section>
          {/* <Exercises
            questions={[
              {
                question:
                  "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
                alternatives: [0, 1, 2, "Infinitas"],
                children: (
                  <SLE key={"gwgyuqgs"} ec1="4x + 2y = 8" ec2="4x + y = 3" />
                ),
              },
            ]}
          /> */}
        </>
      </Page>
      {/* <Page>
        <Exercises
          startsIn={2}
          questions={[
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: (
                <SLE key={"gwgyuqgs"} ec1="4x + 2y = 8" ec2="4x + y = 3" />
              ),
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: (
                <SLE key={"gwgyuqgs"} ec1="4x + 2y = 8" ec2="4x + y = 3" />
              ),
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: (
                <SLE key={"gwgyuqgs"} ec1="4x + 2y = 8" ec2="4x + y = 3" />
              ),
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: (
                <SLE key={"gwgyuqgs"} ec1="4x + 2y = 8" ec2="4x + y = 3" />
              ),
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: (
                <SLE key={"gwgyuqgs"} ec1="4x + 2y = 8" ec2="4x + y = 3" />
              ),
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: (
                <SLE key={"gwgyuqgs"} ec1="4x + 2y = 8" ec2="4x + y = 3" />
              ),
            },
          ]}
        />
      </Page> */}
      <Page>
        <>
          <h2 className={styles.subtitle}>EVALUACIÓN</h2>
          {/* <Exercises
            isAnEvaluation={true}
            questions={[
              {
                question:
                  "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
                alternatives: [0, 1, 2, "Infinitas"],
              },
              {
                question:
                  "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
                alternatives: [0, 1, 2, "Infinitas"],
                children: (
                  <LineChart
                    size="small"
                    ecuations={[
                      {
                        m: 1,
                        n: 0,
                      },
                      {
                        m: 1,
                        n: 2,
                      },
                    ]}
                  />
                ),
              },
              {
                question:
                  "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
                alternatives: [0, 1, 2, "Infinitas"],
              },
              {
                question:
                  "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
                alternatives: [0, 1, 2, "Infinitas"],
              },
              {
                question:
                  "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
                alternatives: [0, 1, 2, "Infinitas"],
              },
              {
                question:
                  "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
                alternatives: [0, 1, 2, "Infinitas"],
              },
            ]}
          /> */}
        </>
      </Page>
      {/* <Page>
        <Exercises
          startsIn={7}
          questions={[
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
              children: (
                <LineChart
                  size="small"
                  ecuations={[
                    {
                      m: 1,
                      n: 0,
                    },
                    {
                      m: 1,
                      n: 2,
                    },
                  ]}
                />
              ),
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
            },
            {
              question:
                "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
              alternatives: [0, 1, 2, "Infinitas"],
            },
          ]}
        />
      </Page> */}
    </div>
  );
};

export default ReportTemplate;
