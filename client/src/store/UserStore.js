import { makeAutoObservable } from "mobx";

class UserStore {
  isAuth = false;
  user = {};

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    console.log("SetIsAuth fired");
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }
}
export default new UserStore();
