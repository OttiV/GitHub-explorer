import React from "react";
import "./Spinner.css";

export const Spinner = (small, light) => {
  const spinnerSize = small ? "small" : "big";
  const spinnerColor = light ? "light" : "dark";
  return <div className={`spinner ${spinnerSize} ${spinnerColor}`}></div>;
};
