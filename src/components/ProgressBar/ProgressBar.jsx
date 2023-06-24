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
        <div className="bar__row">
          <div
            style={completedStyles}
            className="bar__item bar__item_completed"
          >
            <span className="bar__text">{completedText}</span>
          </div>
          <div
            style={remainingStyles}
            className="bar__item bar__item_remaining"
          >
            <span className="bar__text">{remainingText}</span>
          </div>
        </div>
        <div className="bar__row">
          <span style={completedStyles} className="bar__item">
            <span className="bar__text">{completedSubText}</span>
          </span>
          <span style={remainingStyles} className="bar__item">
            <span className="bar__text">{remainingSubText}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
