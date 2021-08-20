import { makeAutoObservable } from 'mobx'

class DeviceStore {
    types = [
        { id: 1, name: 'Холодильники' },
        { id: 2, name: 'Телевизоры' },
    ]
    brands = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Samsung' },
    ]
    devices = [
        { id: 1, name: 'Телевизор Samsung-1', price: 15400, rating: 5, img: 'https://source.unsplash.com/400x300/?samsung,tv' },
        { id: 2, name: 'Холодильник Bosh', price: 9000, rating: 5, img: 'https://source.unsplash.com/400x300/?bosh,fridge' },
        { id: 3, name: 'Холодильник Samsung-1', price: 77345, rating: 5, img: 'https://source.unsplash.com/400x300/?samsung,fridge' },
        { id: 4, name: 'Пылесос Apple', price: 23410, rating: 5, img: 'https://source.unsplash.com/400x300/?apple,vacuum' },
        { id: 5, name: 'Стиральная машина Indesit', price: 43900, rating: 5, img: 'https://source.unsplash.com/400x300/?indesit' },
    ]

    constructor() {
        makeAutoObservable(this)
    }

}

export default new DeviceStore()