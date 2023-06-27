const pages = [
  // Representación
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
              ecuations: [
                { m: -3, n: 13 },
                { m: 2, n: 3 },
              ],
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
                // 3x + y = 13 ---> y = -3 + 13
                // -4x + 2y = 6 ---> y = 2 + 3
                //
                {
                  type: "SLE",
                  options: {
                    ec1: "3x + y = 13",
                    ec2: "-4x + 2y = 6",
                  },
                },
                {
                  type: "paragraph",
                  options: {
                    text: "La solución se encontrará en la intersección entre ambas ecuaciones, en este caso, en el punto (2, 7).",
                  },
                },
                {
                  type: "SLE",
                  options: {
                    ec1: "3(2) + (7) = 13",
                    ec2: "-4(2) + 2(7) = 6",
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
              "Si 2 rectas intersectan en el punto (4, 5), ¿cuál es la solución a su sistema de ecuaciones?",
            alternatives: [
              "x = 4, y = 5",
              "x = 5, y = 4",
              "x = 2, y = 7",
              "No tiene solución",
            ],
          },
          {
            question:
              "¿Cuántas soluciones tiene el siguiente sistema de ecuaciones?",
            alternatives: [0, 1, 2, "Infinitas"],
            children: {
              type: "lineChart",
              options: {
                size: "small",
                ecuations: [{}, { n: 2 }],
              },
            },
          },
        ],
      },
    },
  ],
  // Practica representación
  // [
  //   {
  //     type: "exercises",
  //     options: {
  //       startsIn: 3,
  //       questions: ,
  //     },
  //   },
  // ],
  // Analisis de soluciones
  [
    {
      type: "title",
      options: {
        text: "ANÁLISIS DE SOLUCIONES",
      },
    },
    {
      type: "paragraph",
      options: {
        text: "El siguiente sistema de ecuaciones lineales puede tener:",
      },
    },
    {
      type: "SLE",
      options: {
        ec1: "a₁x + b₁y = c₁",
        ec2: "a₂x + b₂y = c₂",
      },
    },
    {
      type: "columns",
      options: {
        gap: "28px",
        childrens: [
          {
            type: "div",
            options: {
              gap: "6px",
              childrens: [
                {
                  type: "paragraph",
                  options: {
                    text: "Ninguna solución: 2 rectas paralelas que no intersectan:",
                  },
                },
                {
                  type: "lineChart",
                  options: {
                    size: "small",
                    ecuations: [{ n: 1 }, { n: 3 }],
                  },
                },
                {
                  type: "equality",
                  options: {
                    childrens: [
                      {
                        type: "fraction",
                        options: {
                          numerator: "a₁",
                          denominator: "a₂",
                        },
                      },
                      {
                        type: "fraction",
                        options: {
                          numerator: "b₁",
                          denominator: "b₂",
                        },
                      },
                      {
                        type: "fraction",
                        options: {
                          numerator: "c₁",
                          denominator: "c₂",
                        },
                      },
                    ],
                    withBorder: true,
                    exception: {
                      sign: "≠",
                      index: 1,
                    },
                    sign: "=",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            options: {
              gap: "6px",
              childrens: [
                {
                  type: "paragraph",
                  options: {
                    text: "Solución única: 2 rectas secantes que intersectan en un punto:",
                  },
                },
                {
                  type: "lineChart",
                  options: {
                    size: "small",
                    ecuations: [{}, { m: -1, n: 6 }],
                  },
                },
                {
                  type: "equality",
                  options: {
                    childrens: [
                      {
                        type: "fraction",
                        options: {
                          numerator: "a₁",
                          denominator: "a₂",
                        },
                      },
                      {
                        type: "fraction",
                        options: {
                          numerator: "b₁",
                          denominator: "b₂",
                        },
                      },
                    ],
                    withBorder: true,
                    sign: "≠",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            options: {
              gap: "6px",
              childrens: [
                {
                  type: "paragraph",
                  options: {
                    text: "Infinitas soluciones: 2 rectas que intersectan en todos sus puntos:",
                  },
                },
                {
                  type: "lineChart",
                  options: {
                    size: "small",
                    ecuations: [{}],
                  },
                },
                {
                  type: "equality",
                  options: {
                    childrens: [
                      {
                        type: "fraction",
                        options: {
                          numerator: "a₁",
                          denominator: "a₂",
                        },
                      },
                      {
                        type: "fraction",
                        options: {
                          numerator: "b₁",
                          denominator: "b₂",
                        },
                      },
                      {
                        type: "fraction",
                        options: {
                          numerator: "c₁",
                          denominator: "c₂",
                        },
                      },
                    ],
                    withBorder: true,
                    sign: "=",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    // {
    //   type: "title",
    //   options: {
    //     text: "EJEMPLO",
    //     size: "h3"
    //   },
    // },
    // {
    //   type: "equality",
    //   options: {
    //     childrens: [
    //       {
    //         type: "SLE",
    //         options: {
    //           ec1: "2x + 3y = 10",
    //           ec2: "1x + 4y = 8",
    //         },
    //       },
    //       {
    //         type: "equality",
    //         options: {
    //           childrens: [
    //             {
    //               type: "fraction",
    //               options: {
    //                 numerator: "2x",
    //                 denominator: "1x",
    //               },
    //             },
    //             {
    //               type: "fraction",
    //               options: {
    //                 numerator: "3y",
    //                 denominator: "2y",
    //               },
    //             },
    //           ],
    //           sign: "≠",
    //         },
    //       },
    //       {
    //         type: "lineChart",
    //         options: {
    //           size: "small",
    //           ecuations: [
    //             { m: -0.25, n: 2 },
    //             { m: -(2 / 3), n: 10 / 3 },
    //           ],
    //         },
    //       },
    //     ],
    //     sign: "--->",
    //   },
    // },
    {
      type: "exercises",
      options: {
        questions: [
          {
            question:
              "¿Cuántas soluciones tiene el siguiente sistema de ecuaciones lineales?",
            alternatives: [0, 1, 2, "Infinitas"],
            children: {
              type: "SLE",
              options: {
                ec1: "4x + 2y = 8",
                ec2: "4x + y = 3",
              },
            },
          },
          {
            question:
              "Si el siguiente sistema de ecuaciones posee infinitas soluciones, ¿cuál es el valor de a y b, respectivamente?",
            alternatives: ["-4 y -4", "-1 y 8", "1 y 16", "4 y 4"],
            children: {
              type: "SLE",
              options: {
                ec1: "ax + 16y = -8",
                ec2: "x + by = 2",
              },
            },
          },
        ],
      },
    },
  ],
  // Practica analisis de soluciones
  // [
  //   {
  //     type: "exercises",
  //     options: {
  //       startsIn: 2,
  //       questions: [
  //         {
  //           question:
  //             "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
  //           alternatives: [0, 1, 2, "Infinitas"],
  //           children: {
  //             type: "SLE",
  //             options: {
  //               ec1: "4x + 2y = 8",
  //               ec2: "4x + y = 3",
  //             },
  //           },
  //         },
  //         {
  //           question:
  //             "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
  //           alternatives: [0, 1, 2, "Infinitas"],
  //           children: {
  //             type: "SLE",
  //             options: {
  //               ec1: "4x + 2y = 8",
  //               ec2: "4x + y = 3",
  //             },
  //           },
  //         },
  //         {
  //           question:
  //             "¿Cuantas soluciones tiene el siguiente sistema de ecuaciones?",
  //           alternatives: [0, 1, 2, "Infinitas"],
  //           children: {
  //             type: "SLE",
  //             options: {
  //               ec1: "4x + 2y = 8",
  //               ec2: "4x + y = 3",
  //             },
  //           },
  //         },
  //         {
  //           question:
  //             "¿Cual es la solución del siguiente sistema de ecuaciones?",
  //           alternatives: [
  //             "(2, 4)",
  //             "(-2, 9)",
  //             "(9, -2)",
  //             "No tiene solución",
  //           ],
  //           children: {
  //             type: "SLE",
  //             options: {
  //               ec1: "x + 2y = 5",
  //               ec2: "2x + 3y = 12",
  //             },
  //           },
  //         },
  //         {
  //           question:
  //             "Para que el par ordenado (2, 3) sea la solución del siguiente sistema de ecuaciones, el valor de a y b debe ser, respectivamente:",
  //           alternatives: ["2 y 4", "4 y 2", "10 y 1", "7 y 2"],
  //           children: {
  //             type: "SLE",
  //             options: {
  //               ec1: "ax + 4y = 16",
  //               ec2: "2x + by = 12",
  //             },
  //           },
  //         },
  //         {
  //           question:
  //             "Para que el par ordenado (2, 3) sea la solución del siguiente sistema de ecuaciones, el valor de a y b debe ser, respectivamente:",
  //           alternatives: ["2 y 4", "4 y 2", "10 y 1", "7 y 2"],
  //           children: {
  //             type: "SLE",
  //             options: {
  //               ec1: "ax + 4y = 16",
  //               ec2: "2x + by = 12",
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ],
  // Evaluación
  [
    {
      type: "title",
      options: {
        text: "EVALUACIÓN",
      },
    },
    {
      type: "exercises",
      options: {
        isAnEvaluation: true,
        questions: [
          {
            question:
              "Si el par ordenado (8, 2) es la solución del siguiente sistema de ecuaciones, ¿cuál debe ser el valor de c y d, respectivamente?",
            alternatives: ["16 y 8", "10 y 5", "2 y 10", "22 y 32"],
            children: {
              type: "SLE",
              options: {
                ec1: "x + 7y = c",
                ec2: "3x + 4y = d",
              },
            },
          },
          {
            question:
              "¿Cuál condición debe cumplir b para que el sistema de ecuaciones tenga solución única?",
            alternatives: ["b = 6", "b = -6", "b = 0", "b ≠ 6"],
            children: {
              type: "SLE",
              options: {
                ec1: "8x + by = 15",
                ec2: "4x + 3y = 19",
              },
            },
          },
          {
            question:
              "¿Cuántas soluciones tiene el siguiente sistema de ecuaciones?",
            alternatives: [0, 1, 2, "Infinitas"],
            children: {
              type: "lineChart",
              options: {
                size: "small",
                ecuations: [
                  {
                    m: 2,
                    n: 6,
                  },
                  {
                    n: 8,
                  },
                ],
              },
            },
          },
          {
            question: "¿Para qué valor de k el sistema no tiene solución?",
            alternatives: [
              "25 / 8",
              "2",
              "25 / 2",
              "Ninguna de las anteriores",
            ],
            children: {
              type: "SLE",
              options: {
                ec1: "5x + ky = 5",
                ec2: "2x + 5y = 8",
              },
            },
          },

          // k = 25/ 8

          // 8k = 25
          // k = 25 / 8
          {
            question:
              "Para que el par ordenado (2, 3) sea la solución del siguiente sistema de ecuaciones, el valor de a y b debe ser, respectivamente:",
            alternatives: ["2 y 3", "4 y 2", "10 y 1", "7 y 2"],
            children: {
              type: "SLE",
              options: {
                ec1: "ax + 4y = 16",
                ec2: "2x + by = 13",
              },
            },
          },
        ],
      },
    },
  ],
];