import { createContext } from "react"

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    return < ThemeContext.Provider value={{ theme: "light" }}>
        {props.children}
    </ ThemeContext.Provider>
}