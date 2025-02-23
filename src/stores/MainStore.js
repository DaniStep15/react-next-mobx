import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

export default class MainStore {
    name = ''

    constructor() {
        makeAutoObservable(this)

        if (typeof window !== 'undefined') {
            // Включаем сохранение в localStorage
            makePersistable(this, {
                name: 'MainStore',
                properties: ['name'],
                storage: window.localStorage
            })
        }
    }

    setName(name) {
        this.name = name
    }
}
