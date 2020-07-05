import React from "react";
import "./Spinner.css";

export const Spinner = (size, theme) => {
  const spinnerSize = size ? size : "big";
  const spinnerColor = theme ? theme : "dark";
  return <div className={`spinner ${spinnerSize} ${spinnerColor}`}></div>;
};
