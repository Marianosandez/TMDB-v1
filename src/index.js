import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Authcontext from "./context/authContex";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Authcontext>
        <App />
      </Authcontext>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);
