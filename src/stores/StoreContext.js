import React, { createContext, useContext, useRef } from 'react'
import MainStore from './MainStore'

const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
    const storeRef = useRef(null)
    if (!storeRef.current) {
        storeRef.current = new MainStore()
    }

    return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>
}

export const useStore = () => {
    const store = useContext(StoreContext)
    if (!store) throw new Error('useStore must be used within a StoreProvider')
    return store
}
