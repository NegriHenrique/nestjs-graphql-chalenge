import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Styles from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Styles />
  </React.StrictMode>,
  document.getElementById("root")
);
