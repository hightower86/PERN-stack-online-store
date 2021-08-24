import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { RootStore, StoreProvider } from "./store";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      userStore: new UserStore(),
      deviceStore: new DeviceStore(),
    }}
  >
    <App />
  </Context.Provider>,
  // <StoreProvider store={RootStore}>
  //   <App />
  // </StoreProvider>,
  document.getElementById("root")
);
