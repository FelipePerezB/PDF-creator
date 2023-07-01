import React, { useEffect, useState } from "react";
import Page from "./Page";
import getComponent from "@/utils/getComponent";
import styles from "../styles/Doc.module.css";
import Menu from "@/components/Menu";
import getID, { isCID } from "@/utils/getId";
import changeComponent from "@/utils/chnangeComponent";
import ConfigButton from "@/components/ConfigButton";

type props = { type: string; options: any };

export default function Doc() {
  const [modalData, setModalData] = useState<any>();
  const [modalType, setModalType] = useState<"add" | "edit" | "" | "addChild">(
    ""
  );
  const [lastElement, setlastElement] = useState<any>();
  const [componente, setComponent] = useState<any>();
  const [pages, setPage] = useState({
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
      ],
    },
  } as any);

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
    page?.find((JSONComponent: props) => {
      const lowLvlComp = getLowLvlComp(JSONComponent, node.id);
      if (lowLvlComp) {
        component = lowLvlComp;
      }
    });
    return component;
  };

  const getCoords = (event: React.MouseEvent<HTMLDivElement>) => {
    const selection = event?.target as any;
    const node = getNode(selection);
    let component: props;

    component =
      node && (getJSONComponent(pages?.options?.childrens, node) as any);
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
      if (modalType === "edit" && modalData) {
        changeComponent(pages, modalData);
      } else if (modalType === "addChild") {
        changeComponent(pages, componente, { newChild: modalData });
      }
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
    changeComponent(pages, component, { delete: true });
    setPage({ ...pages });
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
    pages.forEach((element: props) => {
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
      <div onClick={getCoords}>{getComponent(pages?.type, pages?.options)}</div>
      {/* <div className={styles.doc} onClick={getCoords} id="doc">
        <div>
          <button
            onClick={() => {
              localStorage.setItem("Doc", JSON.stringify(pages));
            }}
          >
            Guardar
          </button>
        </div>
      </div> */}
      <ConfigButton setComponent={setPage} component={pages} />
    </>
  );
}
