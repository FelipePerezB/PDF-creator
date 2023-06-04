import getComponent from "@/utils/getComponent";
import React, { ReactElement } from "react";

export default function Div({
  childrens,
}: {
  childrens: {
    type: string;
    options: any;
  }[];
}) {
  return (
    <div>
      {childrens.map(({ type, options }) => getComponent(type, options))}
    </div>
  );
}
