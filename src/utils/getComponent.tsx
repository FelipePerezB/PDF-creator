import React, { ReactElement } from "react";
import styles from "../styles/reportTemplate.module.css";
import Title from "@/components/Title";
import Columns from "@/containers/Columns";
import SLE from "@/components/SLE";
import LineChart from "@/components/LineChart";
import Div from "@/components/Div";
import Exercises from "@/containers/Exercises";

const components = {
  div: (options: {
    childrens: {
      type: string;
      options: any;
    }[];
  }) => <Div {...options} />,
  title: (options: { text: string }) => <Title {...options} />,
  paragraph: (options: { text: string }) => (
    <p className={styles.paragrah} {...options}>
      {options.text}
    </p>
  ),
  columns: (options: {
    childrens: {
      type: string;
      options: any;
    }[];
  }) => <Columns {...options}></Columns>,
  SLE: (options: { ec1: string; ec2: string }) => <SLE {...options} />,
  lineChart: (options: {}) => <LineChart {...options} />,
  exercises: (options: any) => <Exercises {...options}/>
} as any;

export default function getComponent(component: string, options: any) {
  return components[component](options);
}
