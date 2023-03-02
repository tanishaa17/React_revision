import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(true);
    const navigate = useNavigate();
    const login = () => {
        setIsAuth(true)
        navigate("/users");
    }
    const logout = () => {
        setIsAuth(false)
    }
    return (
        <AuthContext.Provider value={{ login, logout, isAuth }}>{props.children}</AuthContext.Provider>
    )
}
