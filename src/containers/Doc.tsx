import React, { useEffect, useState } from "react";
import Page from "./Page";
import getComponent from "@/utils/getComponent";
import styles from "../styles/Doc.module.css";
import Menu from "@/components/Menu";
import { isCID } from "@/utils/getId";
import changeComponent from "@/utils/chnangeComponent";

type props = { type: string; options: any };

export default function Doc() {
  const [modalData, setModalData] = useState<any>();
  const [modalType, setModalType] = useState<"add" | "edit" | "" | "addChild">(
    ""
  );
  const [lastElement, setlastElement] = useState<any>();
  const [componente, setComponent] = useState<any>();
  const [pages, setPage] = useState([
    [
      {
        type: "docInfo",
        options: {
          id: "CID812819282",
          title: "SISTEMA DE ECUACIONES",
          subtitle: "EJE: ALGEBRA",
        },
      },
      {
        type: "columns",
        options: {
          id: "CID796888864",
          childrens: [
            {
              type: "SLE",
              options: {
                id: "CID742029431",
                ec1: "2x + 3y = 10",
                ec2: "2x + 5y = 8",
              },
            },
            {
              type: "div",
              options: {
                id: "CID657426618",
                childrens: [
                  {
                    type: "title",
                    options: {
                      id: "CID701799743",
                      text: "AAAA",
                      size: "h1",
                    },
                  },
                  {
                    type: "SLE",
                    options: {
                      id: "CID164118545",
                      ec1: "2x + 3y = 10",
                      ec2: "2x + 5y = 8",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  ] as any[]);
  const [pageNumber, setPageNumber] = useState(0);

  const getNode = (selection?: HTMLElement): HTMLElement | undefined =>
    selection &&
    (isCID(selection?.id)
      ? selection
      : getNode(selection.parentElement as HTMLElement));

  const getLowLvlComp = (JSONComponent: props, expectedID: string) => {
    let component;
    if (JSONComponent.options?.id === expectedID) {
      return JSONComponent;
    }
    JSONComponent.options?.childrens?.forEach((e: props) => {
      const lowLvlCompo = getLowLvlComp(e, expectedID);
      if (lowLvlCompo) {
        component = lowLvlCompo;
      }
    });
    return component;
  };

  const getJSONComponent = (
    page: any[],
    node: HTMLElement
  ): props | undefined => {
    let component;
    page.find((JSONComponent: props) => {
      const lowLvlComp = getLowLvlComp(JSONComponent, node.id);
      if (lowLvlComp) {
        component = lowLvlComp;
      }
    });
    return component;
  };

  const getCoords = (event: React.MouseEvent<HTMLDivElement>) => {
    const selection = event?.target as any;
    if (selection) {
      const id = selection?.id as string;
      if (id.startsWith("page-")) {
        setPageNumber(Number(id.replace("page-", "")));
      }
    }
    const node = getNode(selection);
    let component: props;

    component = node && (getJSONComponent(pages[pageNumber], node) as any);
    setComponent(component);

    setMenuConfig({
      pages: pages,
      coords: {
        y: event.pageY,
        x: event.clientX,
      },
      component,
    });
  };

  useEffect(() => {
    if (
      lastElement?.options?.id !== modalData?.options?.id ||
      modalType === "edit"
    ) {
      setlastElement(modalData);
      if (modalType === "add") {
        pages[pageNumber] = [...pages[pageNumber], modalData];
      } else if (modalType === "edit" && modalData) {
        pages[pageNumber].forEach((element: props) => {
          changeComponent(element, modalData);
        });
      } else if (modalType === "addChild") {
        pages[pageNumber].forEach((element: props) => {
          changeComponent(element, componente, { newChild: modalData });
        });
      }
      setModalData("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData, lastElement, modalType]);
  type JSONComp = {
    options: {
      id: string;
    };
    type: string;
  };

  const deleteComponentCB = (component: JSONComp) => {
    const index = pages[pageNumber].findIndex(
      (element: props) => element?.options?.id === component.options.id
    );
    if (index !== -1) {
      pages[pageNumber].splice(index, 1);
    } else {
      pages[pageNumber].forEach((element: props) => {
        changeComponent(element, component, { delete: true });
      });
    }
    setPage([...pages]);
  };

  const [menuConfig, setMenuConfig] = useState(
    {} as {
      pages: any;
      coords: {
        x: number;
        y: number;
      };
      component?: any;
    }
  );

  const addChild = (component: props, newChild: props) => {
    pages[pageNumber].forEach((element: props) => {
      changeComponent(element, component, { newChild });
    });
    setPage([...pages]);
  };

  return (
    <>
      {menuConfig && (
        <Menu
          addChild={addChild}
          deleteComponentCB={deleteComponentCB}
          setModalType={setModalType}
          modalType={modalType}
          setModalData={setModalData}
          {...menuConfig}
        />
      )}
      <div className={styles.doc} onClick={getCoords} id="doc">
        {pages.map((page, i) => (
          <Page index={i} key={"page-" + i}>
            <>
              {page?.map(({ type, options }: any) =>
                getComponent(type, options)
              )}
            </>
          </Page>
        ))}
        <div>
          <button
            onClick={() => {
              setPage([...pages, []]);
            }}
          >
            Añadir página
          </button>
          <button
            onClick={() => {
              pages.pop();
              setPage([...pages]);
            }}
          >
            Eliminar página
          </button>
          <button
            onClick={() => {
              localStorage.setItem("Doc", JSON.stringify(pages));
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}
