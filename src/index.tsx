import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { Root } from "./components/Root";
import "./index.css";

const root = document.querySelector("#root");
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  root
);
