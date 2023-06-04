import React from "react";

export default function SLE({ ec1, ec2 }: { ec1: string; ec2: string }) {
  const styles: any = {
    SLE: {
      fontSize: "0.8rem",
      width: "max-content",
      height: "max-content",
      margin: "8px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRight: " 2px solid black",
      borderBottom: "2px solid black",
      padding: "0 8px 4px",
      borderEndEndRadius: "4px",
    },
    ecuation: {
      fontSize: "11px",
      display: "inlineBlock",
      width: "max-content",
    },
  };

  return (
    <div style={styles.SLE}>
      <span style={styles.ecuation}>{ec1}</span>
      <span style={styles.ecuation}>{ec2}</span>
    </div>
  );
}
