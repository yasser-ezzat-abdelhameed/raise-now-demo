import React, { useState } from "react";
import RadioElement from "./RadioElement";

function Card() {
  const [mode, setMode] = useState("test");
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
  const handleRadioBtnClick = (e) => {
    setMode(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
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
        <button className="submit-button" type="submit">
          Next
        </button>
      </section>
    </form>
  );
}

export default Card;
