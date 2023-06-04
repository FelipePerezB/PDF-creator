import React from "react";

export default function Fraction({
  numerator,
  denominator,
}: {
  numerator: string | number;
  denominator: string | number;
}) {
  const styles = {
    fraction: {
      width: "max-content",
      display: "flex",
      "flex-direction": "column",
      alignItems: "center",
    },

    numerator: {
      borderBottom: "1px solid black",
    },
  };
  return (
    <div style={styles.fraction}>
      <span style={styles.numerator}>{numerator}</span>
      <span>{denominator}</span>
    </div>
  );
}
