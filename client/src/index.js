import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RootStore, StoreProvider } from "./store";

export const store = new RootStore();

console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,

  document.getElementById("root")
);
