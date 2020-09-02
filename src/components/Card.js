import React from "react";
import { connect } from "react-redux";
import { handlePostMode } from "../actions";
import RadioElement from "./RadioElement";

/**
 * The form card which has the radio buttons and the submit button
 */
function Card({ mode, dispatch }) {
  /* the array which is being used to create the radio elements */
  const radioElements = [
    {
      value: "test",
      title: "Test",
      description:
        "Only transactions and subscriptions in test mode are transferred.",
    },
    {
      value: "production",
      title: "Production",
      description:
        "Only transactions and subscriptions in production mode are transferred.",
    },
  ];

  /**
   * submit the form and sending the mode to the endpoint
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(handlePostMode());
  };

  return (
    <form className="card" onSubmit={handleFormSubmit}>
      <section className="card-section">
        <div className="card-header">RaiseNow Setup</div>
        <div className="card-description">
          The RaiseNow Payment Platform requires the following parameters to be
          setup
        </div>
      </section>
      <div className="divider"></div>
      <section className="card-section">
        {radioElements.map((radioElement) => (
          <RadioElement
            key={radioElement.value}
            value={radioElement.value}
            title={radioElement.title}
            description={radioElement.description}
          />
        ))}
      </section>
      <div className="divider"></div>
      <section className="card-section submit-container">
        <button className="submit-button" type="submit" disabled={!mode}>
          Next
        </button>
      </section>
    </form>
  );
}

const mapStateToProps = ({ mode }) => ({ mode });

export default connect(mapStateToProps)(Card);
