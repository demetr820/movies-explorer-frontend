import React, { useContext, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useValidation } from "../../hooks/useValidation";
// import { search, getShortMovies } from "../../utils/utils";
import "./SearchForm.css";

const SearchForm = ({ onSubmit, handleFilterMovies, isFilterActive }) => {
  const { values, handleChange, errors, isValid } = useValidation({});

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(values.search);
  };
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
          handleFilterMovies={handleFilterMovies}
          // setIsFilterActive={setIsFilterActive}
          isFilterActive={isFilterActive}
          id="filter-checkbox"
        />
        <label>Короткометражки</label>
      </div>
    </form>
  );
};
export default SearchForm;
