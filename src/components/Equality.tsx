import React from "react";

export default function Equality({
  exception,
  withBorder = false,
  values,
  sign,
}: {
  exception?:{
    sign: string,
    index: number
  }
  withBorder?: boolean;
  values: any[];
  sign: string;
}) {
  const styles = {
    equality: {
      border: withBorder ? "1px solid black" : "none",
      borderRadius: "2px",
      padding: withBorder ? "6px" : "0",
      "justify-content": "center",
      fontSize: "12px",
      display: "flex",
      "align-items": "center",
      gap: "8px",
    },
  };
  return (
    <div style={styles.equality}>
      {values.map((element, i) => (
        <>
          <span key={element + "text"}>{element}</span>
          {exception?.index !== i && i + 1 < values.length && <span key={element + "sign"}>{sign}</span>}
          {exception?.index === i && <span key={element + "sign"}>{exception.sign}</span>}
        </>
      ))}
    </div>
  );
}
