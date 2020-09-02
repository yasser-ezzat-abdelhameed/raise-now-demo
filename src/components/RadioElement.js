import React from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";

/**
 * The radio button section which has the title, the description, and the radio button itself
 */
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

RadioElement.propTypes = {
  value: PropTypes.string.isRequired,
  mode: PropTypes.string,
  handleRadioBtnClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RadioElement;
