import React from "react";
import { JSX } from "react/jsx-runtime";

export type CopyrightProps = {
  rendering: { componentName: string };
  // params: { [key: string]: string };
  // fields: {};
  background: string;
  label: string;
};
const Copyright = ({ background, label }: CopyrightProps): JSX.Element => {
  return (
    <div className="copyright bg-teal-700 p-4 text-center">
      <p>{label}</p>
    </div>
  );
};

export default Copyright;
