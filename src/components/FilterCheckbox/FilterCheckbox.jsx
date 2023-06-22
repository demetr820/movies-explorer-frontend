import React from "react";
import "./FilterCheckbox.css";

const Switch = ({ id }) => {
  return (
    <>
      <input className="react-switch-checkbox" id={id} type="checkbox" />
      <label className="react-switch-label" htmlFor={id}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
