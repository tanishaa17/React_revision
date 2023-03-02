import React, { useContext } from 'react'
import { AuthContext } from '../ContextProvider/AuthContextProvider'
export const Login = () => {
    const { isAuth, login } = useContext(AuthContext)
    return (
        <button disabled={isAuth} onClick={login}>Login</button>
    )
}
