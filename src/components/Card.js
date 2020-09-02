import React, { useState } from "react";
import axios from "axios";
import RadioElement from "./RadioElement";

/**
 * The form card which has the radio buttons and the submit button
 */
function Card() {
  const [mode, setMode] = useState();

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
   * setting the mode when a radio button gets clicked
   */
  const handleRadioBtnClick = (e) => {
    setMode(e.target.value);
  };

  /**
   * submit the form and sending the mode to the endpoint
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://fend-tavel-app.herokuapp.com/mode",
        {
          mode,
        }
      );
      alert(data);
      setMode(null);
    } catch (e) {
      alert(e.message);
    }
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
            mode={mode}
            handleRadioBtnClick={handleRadioBtnClick}
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

export default Card;
