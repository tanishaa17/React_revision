import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        console.log("button is working")
        setTheme(theme === "light" ? "dark" : "light")
    }
    return < ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
    </ ThemeContext.Provider>
}