import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({
  id,
  isFilterActive,
  // setIsFilterActive,
  handleFilterMovies
}) => {
  const handleChecked = e => {
    // setIsFilterActive(e.target.checked);
    handleFilterMovies(e.target.checked);
  };
  return (
    <>
      <input
        className="react-switch-checkbox"
        name="checkbox"
        id={id}
        type="checkbox"
        onChange={handleChecked}
        checked={isFilterActive ? true : false}
      />
      <label className="react-switch-label" htmlFor={id}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default FilterCheckbox;
