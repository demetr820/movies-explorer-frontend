import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-form__inner">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
        />
        <button className="search-form__button">Найти</button>
      </div>
      <div className="search-form__switcher">
        <FilterCheckbox id="filter-checkbox" />
        <label>Короткометражки</label>
      </div>
    </form>
  );
};
export default SearchForm;
