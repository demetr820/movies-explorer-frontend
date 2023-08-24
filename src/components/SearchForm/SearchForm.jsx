import React, { useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useValidation } from "../../hooks/useValidation";
import "./SearchForm.css";

const SearchForm = ({
  onSubmit,
  handleFilterChange,
  isFilterActive,
  setShowError,
}) => {
  const { values, setValues, handleChange, errors, isValid } = useValidation(
    {}
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValue = values.search;
    if (isValid) {
      onSubmit(currentValue);
      localStorage.setItem("searchString", currentValue);
    } else {
      setShowError("Нужно ввести ключевое слово");
    }
  };
  useEffect(() => {
    setValues({ search: localStorage.getItem("searchString") });
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
          <span className="search-form__error">
            Нужно ввести ключевое слово
          </span>
        )}
        <button className="search-form__button">Найти</button>
      </div>
      <div className="search-form__switcher">
        <FilterCheckbox
          handleFilterChange={handleFilterChange}
          isFilterActive={isFilterActive}
          id="filter-checkbox"
        />
        <label>Короткометражки</label>
      </div>
    </form>
  );
};
export default SearchForm;
