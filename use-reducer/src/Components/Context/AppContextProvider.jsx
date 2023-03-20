import React, { createContext, useReducer } from 'react'

export const AppContext = createContext();

const initState = {
    count: 0,
    todos: []
}
const appReducer = ((state, { type, payload }) => {
    switch (type) {
        case "INC": {
            return {
                ...state,
                count: state.count + (payload || 1)
            }
        }
        case "DEC": {
            return {
                ...state,
                count: state.count - (payload || 1)
            }
        }
        default: {
            return state;
        }
    }
})

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initState)
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}
