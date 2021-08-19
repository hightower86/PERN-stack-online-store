import { makeAutoObservable } from 'mobx'

class UserStore {
    isAuth = false;
    user = {}

    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }


}
export default new UserStore()