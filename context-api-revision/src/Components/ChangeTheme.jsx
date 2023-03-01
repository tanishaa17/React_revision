import React, { useContext } from 'react'
import { ThemeContext } from '../ContextProvider/ThemeContextProvider'

export const ChangeTheme = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <button style={{
            background: theme === "light" ? "tomato" : "skyblue",
            color: theme === "light" ? "black" : "black",
            padding: "1%",
            borderRadius: "25px"

        }} >Change Theme</button>
    )
}
