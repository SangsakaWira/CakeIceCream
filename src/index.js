import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { cakeReducer } from "./redux/cake/reducers";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(cakeReducer)}>
    <App />
  </Provider>,
  rootElement
);
