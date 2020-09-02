import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setMode } from "../actions";

/**
 * The radio button element
 */
function RadioButton({ value, mode, dispatch }) {
  const handleRadioBtnClick = () => dispatch(setMode(value));
  const checked = value === mode;

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
  mode: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps)(RadioButton);
