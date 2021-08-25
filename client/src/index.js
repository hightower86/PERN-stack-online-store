import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RootStore, StoreProvider } from "./store";

export const store = new RootStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,

  document.getElementById("root")
);
