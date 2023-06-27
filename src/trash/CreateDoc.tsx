// import Modal from "@/components/Modal";
// import Doc from "@/containers/Doc";
// import { components } from "@/utils/getComponent";
// import React, { useEffect, useRef, useState } from "react";

// export default function CreateDoc() {
//   const [page, setPage] = useState([] as any);
//   const [modalState, setModalState] = useState(false);
//   const getID = () => String(Math.trunc(Math.random() * 1000000000))

//   const componentsNames = Object.entries(components).map((e) => e[0]);
//   const [currentShema, setCurrentShema] = useState([]);
//   const [currentComponent, setCurrentComponent] = useState({});
//   const [childList, setChildList] = useState([]);
//   const formRef = useRef(null);

//   const createChildren = () => {
//     if (
//       childList.at(-1) !== currentComponent?.id &&
//       currentComponent?.id !== undefined
//     )
//       setChildList([...childList, currentComponent?.id]);
//     setCurrentShema(undefined);
//   };

//   useEffect(() => {
//     if (currentComponent?.type) {
//       setCurrentShema(
//         Object.entries(components[currentComponent?.type]?.schema) as []
//       );
//     }
//   }, [currentComponent]);

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     // const ID = parseInt(String(Math.random() * 1000000));
//     const formData = new FormData(formRef.current as any);
//     const newComponent = {
//       type: currentComponent?.type,
//       options: {
//         id: getID()
//       },
//     };
//     currentShema.forEach((key) => {
//       const data = formData.get(key[0]) as never;
//       newComponent.options[key[0]] = data;
//     });
//     setPage([...page, newComponent]);
//   };

//   return (
//     <div>
//         <Modal
//         title="Configuración"
//         modalState={modalState}
//         setModalState={setModalState}
//         options={[
//           { text: "Top", selectConfig: ["Curso", "Nacional"] },
//           {
//             text: "Mostrar",
//             selectConfig: ["Top 10", "Top 20", "Top 100", "Todos"],
//           },
//         ]}
//       />
//       <form onSubmit={handleSubmit} ref={formRef}>
//         {currentShema?.map((key) => (
//           <label key={key[0]}>
//             <span>{key[0]}</span>
//             <input name={key[0]} />
//           </label>
//         ))}
//         <button>Crear</button>
//         {/* {componentsNames.map((component) => (
//           <button
//             onClick={() =>
//               setCurrentComponent({
//                 type: component,
//               })
//             }
//             key={component}
//             type="button"
//           >
//             {component}
//           </button> */}
//         {/* ))} */}
//       </form>
//       <button onClick={createChildren} type="button">
//         Elegir hijo
//       </button>
//       <button onClick={()=>setModalState(true)} type="button">
//         Editar
//       </button>
//       <Doc page={page} />
//     </div>
//   );
// }
