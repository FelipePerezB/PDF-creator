import React, { useEffect, useState } from "react";
import Page from "./Page";
import getComponent from "@/utils/getComponent";
import styles from "../styles/Doc.module.css";
import Menu from "@/components/Menu";
import { isCID } from "@/utils/getId";

type props = { type: string; options: any };

export default function Doc() {
  const [modalData, setModalData] = useState<any>();
  const [modalType, setModalType] = useState<"add" | "edit" | "">("");
  const [lastElement, setlastElement] = useState<any>();
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

  const changeComponent = (component: props, data: props): any => {
    if (component.options?.id === data.options?.id) {
      component.options = data.options;
    } else {
      component?.options?.childrens?.forEach((child: props) => {
        if (child?.options?.id === data.options?.id) {
          child.options = data.options;
          return;
        } else changeComponent(child, data) as props;
      });
    }
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
    let component;

    component = node && getJSONComponent(pages[pageNumber], node);
    setMenuConfig({
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
    pages[pageNumber] = pages[pageNumber].filter(
      (element: JSONComp) => element?.options?.id !== component?.options?.id
    );
    setPage([...pages]);
  };

  const [menuConfig, setMenuConfig] = useState(
    {} as {
      coords: {
        x: number;
        y: number;
      };
      component?: any;
    }
  );

  return (
    <>
      {menuConfig && (
        <Menu
          deleteComponentCB={deleteComponentCB}
          setModalType={setModalType}
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
