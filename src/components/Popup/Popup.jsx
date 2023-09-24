import React from "react";
import "./Popup.css";
const Popup = ({ isOpen, onClose, message }) => {
  return (
    <div className={`popup${isOpen ? " popup_visible" : ""}`}>
      <div className="popup__inner">
        <p>{message}</p>
        <button onClick={() => onClose(false)}>Ok</button>
      </div>
    </div>
  );
};

export default Popup;
