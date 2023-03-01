import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const logIn = () => {
        setIsAuth(true);
    }
    const logOut = () => {
        setIsAuth(false);
    }
    return (
        <AuthContext.Provider value={{ logIn, logOut, isAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}
