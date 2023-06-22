import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({
  width,
  completedText,
  remainingText,
  completedSubText,
  remainingSubText
}) => {
  const completedStyles = {
    width: `${width}%`
  };
  const remainingStyles = {
    width: `${100 - width}%`
  };
  return (
    <>
      <div className="bar">
        <div style={completedStyles} className="bar__item bar__item_completed">
          <span className="bar__text">{completedText}</span>
        </div>
        <div style={remainingStyles} className="bar__item bar__item_remaining">
          <span className="bar__text">{remainingText}</span>
        </div>
      </div>
      <div className="bar__description">
        <span style={completedStyles} className="bar__item bar__text">
          {completedSubText}
        </span>
        <span style={remainingStyles} className="bar__item bar__text">
          {remainingSubText}
        </span>
      </div>
    </>
  );
};

export default ProgressBar;
