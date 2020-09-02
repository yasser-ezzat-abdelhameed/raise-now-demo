import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import middleware from "./middleware";
import "./styles/resets.css";
import "./styles/fonts.css";
import "./styles/main.css";
import App from "./App";
import startMockServer from "./mock";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (process.env.REACT_APP_MODE === "DEV") {
  startMockServer();
}
