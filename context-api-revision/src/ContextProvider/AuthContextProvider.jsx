import React, { createContext } from 'react'

export const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    return (
        <AuthContext.Provider value={28}>
            {props.children}
        </AuthContext.Provider>
    )
}
