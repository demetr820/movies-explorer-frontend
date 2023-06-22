import React from "react";
import { useValidation } from "../../hooks/useValidation";
import "./Form.css";

const Form = ({ children, textSubmit }) => {
  const { values, handleChange, errors, isValid } = useValidation({});
  const inputs = children.map((child, idx) => {
    return (
      <div className="form__fieldset" key={idx}>
        <label className="form__label" htmlFor={child.id}>
          {child.label}
        </label>
        <input
          {...child.val}
          type={child.type}
          name={child.name}
          value={values[child.name] || ""}
          id={child.id}
          className={`form__input ${
            errors[child.name] ? "form__input_error" : ""
          }`}
          onChange={handleChange}
        />
        <span className="form__error">{errors[child.name]}</span>
      </div>
    );
  });
  return (
    <form className="form">
      {inputs}
      <button
        className={`form__submit ${isValid ? "" : " form__submit_disabled"}`}
        disabled={!isValid}
      >
        {textSubmit}
      </button>
    </form>
  );
};
export default Form;
