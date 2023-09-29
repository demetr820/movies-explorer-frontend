import React, { useContext } from "react";
import { useValidation } from "../../hooks/useValidation";
import Preloader from "../../components/Preloader/Preloader";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Form.css";

const Form = ({ children, handleFormSubmit, textSubmit }) => {
  const { values, handleChange, errors, isValid } = useValidation({});
  const { isLoading } = useContext(CurrentUserContext);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    children.map((child) => {
      data[child.name] = values[child.name];
    });
    handleFormSubmit(data);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputs}
      {isLoading ? (
        <Preloader />
      ) : (
        <button
          className={`form__submit ${isValid ? "" : " form__submit_disabled"}`}
          disabled={!isValid || isLoading}
        >
          {textSubmit}
        </button>
      )}
    </form>
  );
};
export default Form;
