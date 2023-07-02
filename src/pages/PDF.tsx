import Document from "@/containers/Document";
import getComponent from "@/utils/getComponent";
import React, { useState } from "react";

export default function PDF() {
  const [component, setComponent] = useState({
    type: "doc",
    options: {
      id: "CID812919622",
      childrens: [
        {
          type: "page",
          options: {
            id: "CID812819282",
            childrens: [
              {
                type: "docInfo",
                options: {
                  id: "CID812889282",
                  title: "SISTEMA DE ECUACIONES",
                  subtitle: "EJE: ALGEBRA",
                },
              },
            ],
          },
        },
        {
          type: "page",
          options: {
            id: "CID812819282",
            childrens: [
              {
                type: "docInfo",
                options: {
                  id: "CID812889282",
                  title: "SISTEMA DE ECUACIONES",
                  subtitle: "EJE: ALGEBRA",
                },
              },
            ],
          },
        },
      ],
    },
  });
  return <>{getComponent(component.type, component?.options)};</>;
}
