import React from "react";
import LoadingIndicator from "./components/LoadingIndicator";
import Header from "./components/Header";
import StepIndicator from "./components/StepIndicator";
import Main from "./components/Main";

function App() {
  return (
    <React.Fragment>
      <LoadingIndicator />
      <Header />
      <StepIndicator />
      <Main />
    </React.Fragment>
  );
}

export default App;
