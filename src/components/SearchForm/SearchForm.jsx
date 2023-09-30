import React, { useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useValidation } from "../../hooks/useValidation";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = ({ onSubmit, handleFilterChange, setShowError }) => {
  const { values, setValues, handleChange, errors, isValid } = useValidation(
    {}
  );
  const [showError, setShowError] = useState("");
  const { pathname } = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValue = values.search;
    if (isValid) {
      onSubmit(currentValue);
    } else {
      setShowError("Нужно ввести ключевое слово");
    }
  };
  useEffect(() => {
    if (pathname === "/movies") {
      setValues({ search: localStorage.getItem("searchString") });
    }
  }, []);
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__inner">
        <input
          onChange={handleChange}
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          name="search"
          value={values.search || ""}
          minLength="1"
          required
        />
        {errors.search && (
          <span className="search-form__error">{showError}</span>
        )}
        <button className="search-form__button">Найти</button>
      </div>
      <div className="search-form__switcher">
        <FilterCheckbox
          handleFilterChange={handleFilterChange}
          id="filter-checkbox"
        />
        <label>Короткометражки</label>
      </div>
    </form>
  );
};
export default SearchForm;
