import React, { createContext, useContext } from "react";
//import { store } from "..";
import DeviceStore from "./DeviceStore";
import UserStore from "./UserStore";

class RootStore {
  constructor() {
    this.userStore = new UserStore();
    this.deviceStore = new DeviceStore();
  }
}

const StoreContext = createContext(new RootStore());

const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("Looks like connection to StoreProvider was lost");
  }
  return context;
};

const StoreProvider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { RootStore, StoreProvider, useStore };
