import Modal from "@/containers/Modal";
import styles from "../styles/Doc.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function Menu({
  deleteComponentCB,
  coords,
  setModalData,
  component,
  setModalType,
}: {
  coords: { x: number; y: number };
  component?: any;
  setModalData: (data: {}) => void;
  setModalType: (type: "add" | "edit") => void;
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
  } as any;

  const [modalState, setModalState] = useState(false);
  const openModal = (type: "add" | "edit") => {
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
              onClick={() => openModal(component ? "edit" : "add")}
              id="menu"
              style={style.p}
              className={styles.config}
            >
              {component ? "Configurar" : "Nuevo elemento"}
            </p>
            {component && (
              <p
                onClick={() => deleteComponentCB(component)}
                style={style.delete}
                className={styles.config}
              >
                Eliminar
              </p>
            )}
          </>
        )}
        <Modal
          selectedComponent={component}
          setModalData={setModalData}
          modalState={modalState}
          setModalState={setModalState}
        />
      </>,
      document.querySelector("#modal") as HTMLDivElement
    );
  }
}
