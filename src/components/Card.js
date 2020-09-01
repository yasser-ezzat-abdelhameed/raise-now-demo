import React from "react";

function Card() {
  return (
    <div className="card">
      <section className="card-section">
        <div className="card-header">RaiseNow Setup</div>
        <div className="card-description">
          The RaiseNow Payment Platform requires the following parameters to be
          setup
        </div>
      </section>
      <div className="divider"></div>
      <section className="card-section">
        <div className="radio-element">
          <div>
            <img
              src="/images/radio-checked.svg"
              className="radio-checked"
              alt="radio-checked"
            />
          </div>
          <div className="radio-label">
            <div className="radio-label-header">Test</div>
            <div className="radio-label-description">
              Only transactions and subscriptions in test mode are transferred.
            </div>
          </div>
        </div>
        <div className="radio-element">
          <div>
            <img
              src="/images/radio-unchecked.svg"
              className="radio-checked"
              alt="radio-unchecked"
            />
          </div>
          <div className="radio-label">
            <div className="radio-label-header">Production</div>
            <div className="radio-label-description">
              Only transactions and subscriptions in production mode are
              transferred.
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="card-section submit-container">
        <button className="submit-button">Next</button>
      </section>
    </div>
  );
}

export default Card;
