import { makeAutoObservable } from "mobx";

export default class UserStore {
  isAuth = false;
  user = {};
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setIsAuth(bool) {
    console.log("SetIsAuth fired", "this.isAuth:", this._isAuth);
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }
}
