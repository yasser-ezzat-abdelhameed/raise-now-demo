import React from "react";
import RadioButton from "./RadioButton";

function RadioElement({
  value,
  mode,
  handleRadioBtnClick,
  title,
  description,
}) {
  return (
    <div className="radio-element">
      <RadioButton
        value={value}
        checked={mode === value}
        handleRadioBtnClick={handleRadioBtnClick}
      />
      <div className="radio-label">
        <div className="radio-label-header">{title}</div>
        <div className="radio-label-description">{description}</div>
      </div>
    </div>
  );
}

export default RadioElement;
