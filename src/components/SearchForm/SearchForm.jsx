import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

const SearchForm = () => {
  // const [isFilterActive, setIsFilterActive] = useState(false);
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
