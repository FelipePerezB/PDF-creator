import NewCompModal from "@/containers/NewCompModal";
import styles from "../styles/Doc.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type props = { type: string; options: any };

export default function Menu({
  deleteComponentCB,
  coords,
  setModalData,
  component,
  setModalType,
  modalType,
}: {
  addChild: (component: props, newChild: props) => void;
  modalType: string;
  coords: { x: number; y: number };
  component?: props;
  setModalData: any;
  setModalType: (type: "add" | "edit" | "addChild") => void;
  deleteComponentCB: (component: any) => void;
}) {
  const style = {
    p: {
      position: "absolute",
      top: coords?.y + "px",
      left: coords?.x + "px",
    },
    delete: {
      position: "absolute",
      top: coords?.y + "px",
      left: coords?.x + 45 + "px",
    },
    add: {
      position: "absolute",
      top: coords?.y + "px",
      left: coords?.x + 65 + "px",
    },
  } as any;

  const [modalState, setModalState] = useState(false);
  const openModal = (type: "add" | "edit" | "addChild") => {
    setModalState(true);
    setModalType(type);
  };

  const [menuState, setMenuState] = useState(true);

  useEffect(() => {
    setMenuState(true);
    const timeout = setTimeout(() => {
      setMenuState(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [coords]);

  if (coords?.x && coords?.y) {
    return createPortal(
      <>
        {coords?.y && coords?.x && menuState && (
          <>
            <p
              onClick={() => openModal("edit")}
              id="menu"
              style={style.p}
              className={styles.config}
            >
              Configurar
            </p>
            {component && (
              <p
                onClick={() => deleteComponentCB(component)}
                style={style.delete}
                className={styles.config}
              >
                -
              </p>
            )}
            {component?.options?.childrens && (
              <p
                onClick={() => openModal("addChild")}
                style={style.add}
                className={styles.config}
              >
                +
              </p>
            )}
          </>
        )}
        <NewCompModal
          setModalData={setModalData}
          modalState={modalState}
          setModalState={setModalState}
          selectedComponent={modalType === "addChild" ? undefined : component}
        />
      </>,
      document.querySelector("#modal") as HTMLDivElement
    );
  }
}
