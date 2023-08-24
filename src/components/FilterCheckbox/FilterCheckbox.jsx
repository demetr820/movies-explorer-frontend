import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ id, handleFilterChange, isFilterActive }) => {
  // const [isChecked, setIsChecked] = useState(false);
  const handleChecked = () => {
    // setIsChecked(!isChecked);
    handleFilterChange(!isFilterActive);
    localStorage.setItem("isShort", !isFilterActive);
  };
  // useEffect(() => {
  //   const checkboxState = JSON.parse(localStorage.getItem("isShort"));
  //   setIsChecked(checkboxState);
  // }, []);
  return (
    <>
      <input
        className="react-switch-checkbox"
        name="checkbox"
        id={id}
        type="checkbox"
        onChange={handleChecked}
        checked={isFilterActive}
      />
      <label className="react-switch-label" htmlFor={id}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default FilterCheckbox;
