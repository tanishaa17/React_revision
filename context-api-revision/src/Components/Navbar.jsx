import { useContext } from "react"
import { ThemeContext } from "../ContextProvider/ThemeContextProvider"

export const Navbar = () => {
    const nav = useContext(ThemeContext)
    return (
        <>
            <h1>Hello Navbar</h1>
            <p>Theme is {nav.theme}</p>
        </>
    )
}