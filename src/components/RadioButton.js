import React from "react";
import PropTypes from "prop-types";

/**
 * The radio button element
 */
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

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleRadioBtnClick: PropTypes.func.isRequired,
};

export default RadioButton;
