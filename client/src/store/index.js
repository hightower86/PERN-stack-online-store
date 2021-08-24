import React, { createContext, useContext } from "react";
import DeviceStore from "./DeviceStore";
import UserStore from "./UserStore";

// class RootStore {
//   constructor() {
//     this.userStore = new UserStore();
//     this.deviceStore = new DeviceStore();
//     // this.basketStore = new BasketStore(this);
//     // this.paginationStore = new PaginationStore(this);
//   }
// }

const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("Looks like connection to StoreProvider was lost");
  }
  return context;
};

// const store = new RootStore();

const RootStore = {
  userStore: new UserStore(),
  deviceStore: new DeviceStore(),
};

// const StoreContext = createContext(new RootStore());
export const StoreContext = createContext(RootStore);

const StoreProvider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { RootStore, StoreProvider, useStore };
