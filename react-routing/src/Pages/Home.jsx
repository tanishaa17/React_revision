import React, { useContext } from 'react'
import { AuthContext } from '../ContextProvider/AuthContextProvider'

export const Home = () => {
    const { logout, isAuth } = useContext(AuthContext)
    return (
        <>
            <button disabled={!isAuth} onClick={logout}>LogOut</button>
        </>
    )
}
