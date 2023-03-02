import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
        setIsAuth(true)
    }
    const logout = () => {
        setIsAuth(false)
    }
    return (
        <AuthContext.Provider value={{ login, logout, isAuth }}>{props.children}</AuthContext.Provider>
    )
}
