import React from "react";

function RadioButton({ value, checked, handleRadioBtnClick }) {
  return (
    <label className="radio-button">
      <input
        type="radio"
        name="mode"
        value={value}
        checked={checked}
        onChange={handleRadioBtnClick}
      />
      <img
        src={
          checked ? "/images/radio-checked.svg" : "/images/radio-unchecked.svg"
        }
        className="radio-checked"
        alt="radio-btn"
      />
    </label>
  );
}

export default RadioButton;
