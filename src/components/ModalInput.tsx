// import { isArray } from "chart.js/dist/helpers/helpers.core";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Modal.module.css";
import Modal from "@/containers/Modal";

type component = {
  type: string;
  options:
    | {
        id: string;
      }
    | any;
};

type props = {
  name: string;
  type: any;
};

export default function ModalInput({
  type,
  value,
  name,
  addFormData,
}: {
  name: string;
  value?: string;
  type: string | any;
  addFormData: (data: any) => void;
}) {
  const createFormData = (value: any) => {
    const data: any = {};
    data[name] = value;
    addFormData(data);
  };

  if (value) createFormData(value);

  const StandardInput = ({ name, type }: props) => (
    <input
      defaultValue={value}
      name={name}
      onChange={(event) => createFormData(event?.target?.value)}
      type={type as unknown as "string" | "number"}
    />
  );

  const OptionsInput = ({ options }: any) => (
    <>
      <label>
        <input
          name={options.join()}
          id="select-array"
          defaultValue={value}
          onChange={(event) => createFormData(event?.target?.value)}
          list={options.join()}
        />
      </label>
      <datalist id={options.join()}>
        {options.map((value: string) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </datalist>
    </>
  );

  const ChildrensInput = ({ name, type }: props) => {
    const defaultValue = Array.isArray(value) ? value : [];
    const [modalState, setModalState] = useState(false);
    const [modalData, setModalData] = useState<component>();
    const [lastChild, setLastChild] = useState<component>();
    const [children, setChildren] = useState<component[]>(defaultValue);

    useEffect(() => {
      if (modalData && lastChild?.options?.id !== modalData?.options?.id) {
        setLastChild(modalData);
        setChildren([...children, modalData]);
      }
    }, [children, lastChild, modalData]);

    useEffect(() => {
      createFormData(children);
    }, [children]);

    return (
      <>
        <article className={styles["child-input"]}>
          <section>
            <div className={styles["child-input__children"]}>
              {children?.map(({ type, options }) => (
                <div className={styles.child} key={options?.id}>
                  <span>{type}</span>
                  <span>{options?.id}</span>
                  <div>
                    <span>-</span>
                    <span>Ed</span>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className={styles["children-input__add"]}>
              <span onClick={() => setModalState(true)}>Añadir hijo</span>
            </button>
          </section>
        </article>
        <Modal
          modalState={modalState}
          setModalState={setModalState}
          setModalData={setModalData}
        />
      </>
    );
  };
  const ChildInput = () => {
    const defaultValue = Array.isArray(value) ? value : [];
    const [modalState, setModalState] = useState(false);
    const [modalData, setModalData] = useState<component>();

    useEffect(() => {
      if (modalData) {
        createFormData(modalData);
      }
    }, [modalData]);

    return (
      <>
        <article className={styles["child-input"]}>
          <section>
            <div className={styles["child-input__children"]}>
              {modalData && (
                <div className={styles.child} key={modalData.options?.id}>
                  <span>{modalData.type}</span>
                  <span>{modalData.options?.id}</span>
                  <div>
                    <span>-</span>
                    <span>Ed</span>
                  </div>
                </div>
              )}
            </div>
            <button type="button" className={styles["children-input__add"]}>
              <span onClick={() => setModalState(true)}>Añadir hijo</span>
            </button>
          </section>
        </article>
        <Modal
          modalState={modalState}
          setModalState={setModalState}
          setModalData={setModalData}
        />
      </>
    );
  };

  const BooleanInput = () => {
    const [state, setState] = useState(value || false);
    useEffect(() => {
      createFormData(state);
    }, [state]);
    const handleToogle = () => {
      setState(!state);
    };
    return <div onClick={handleToogle}>{String(state)}</div>;
  };

  const SubInputs = ({ name, ...inputs }: any) => {
    const types = Object.entries(inputs);
    const [objectValues, setObjectValues] = useState({} as any);
    const addObjectData = (data: any) => {
      const key = Object.keys(data)[0];
      const value = Object.values(data)[0];
      objectValues[key] = value;
      setObjectValues(objectValues);
    };

    createFormData(objectValues);
    return (
      <div className={styles.list}>
        {types.map(([name, type]) => (
          <ModalInput
            key={name}
            name={name}
            type={type}
            addFormData={addObjectData}
          />
        ))}
      </div>
    );
  };

  const SubInputsArray = ({ name, ...data }: any) => {
    const inputs = Object.entries(data);
    const [objectValues, setObjectValues] = useState({} as any);
    const [elements, setElements] = useState(
      Array.isArray(value) ? value : ([] as any[])
    );

    const addObjectData = (data: any) => {
      const key = Object.keys(data)[0];
      const value = Object.values(data)[0];
      objectValues[key] = value;
      setObjectValues(objectValues);
    };
    useEffect(() => {
      createFormData(elements);
    }, [elements]);

    return (
      <>
        <div>
          {inputs.map(([name, type]) => (
            <ModalInput
              key={name}
              name={name}
              type={type}
              addFormData={addObjectData}
            />
          ))}
        </div>
        <div>
          {elements?.map((element) => {
            const props = Object.entries(element) as any;
            return props?.map(([key, value]: string[]) => {
              return (
                <div key={value + key}>
                  <span>
                    {key}: {value}
                  </span>
                </div>
              );
            });
          })}
        </div>
        <button
          type="button"
          onClick={() => {
            setElements([...elements, { ...objectValues }]);
          }}
        >
          Añadir
        </button>
        <button type="button">Eliminar</button>
      </>
    );
  };

  const inputTypes: any = {
    text: (props: any) => <StandardInput {...props} />,
    number: (props: any) => <StandardInput {...props} />,
    children: (props: any) => <ChildrensInput {...props} />,
    boolean: (props: any) => <BooleanInput {...props} />,
    options: (props: any) => <OptionsInput {...props} />,
    subInputs: (props: any) => <SubInputs {...props} />,
    subInputsArray: (props: any) => <SubInputsArray {...props} />,
    child: (props: any) => <ChildInput {...props} />,
  };

  const getInput = () => {
    let props = {
      name,
      type,
    };
    if (typeof type === "object") {
      const { type, ...newProps } = props?.type;
      newProps.name = props?.name;
      return inputTypes[type](newProps);
    }
    return inputTypes[type](props);
  };

  return (
    <label htmlFor={name} key={name}>
      <span>{name}</span>
      {getInput()}
    </label>
  );
}
