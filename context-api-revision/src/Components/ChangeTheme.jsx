import React, { useContext } from 'react'
import { ThemeContext } from '../ContextProvider/ThemeContextProvider'

export const ChangeTheme = ({ btntxt, onClick }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <button

            style={{
                background: theme === "light" ? "black" : "beige",
                color: theme === "light" ? "beige" : "black",
                padding: "1%",
                borderRadius: "25px",
                cursor: "pointer"
            }}
            onClick={onClick}
        >
            {btntxt}</button>
    )
}
