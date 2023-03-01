import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return < ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
        {props.children}
    </ ThemeContext.Provider>
}