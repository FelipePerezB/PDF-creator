import React, { useEffect, useState } from "react";
import styles from "@/styles/ConfigButton.module.css";
import { createPortal } from "react-dom";
import NewCompModal from "@/containers/NewCompModal";

export default function ConfigButton({
  component,
  setComponent,
}: {
  component: any;
  setComponent: any;
}) {
  const [modalData, setModalData] = useState<any>();
  const [loaded, setLoaded] = useState<any>();
  const [modalState, setModalState] = useState(false);

  console.log(component);

  useEffect(() => {
    if (modalData) {
      console.log(modalData)
      setComponent({ ...modalData });
    }
  }, [modalData, setComponent]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded)
    return createPortal(
      <>
        <div
          className={styles["config-button"]}
          onClick={() => setModalState(true)}
        ></div>
        <NewCompModal
          setModalData={setModalData}
          modalState={modalState}
          setModalState={setModalState}
          selectedComponent={component}
        />
      </>,
      document.querySelector("#modal") as HTMLDivElement
    );
  return <></>;
}
