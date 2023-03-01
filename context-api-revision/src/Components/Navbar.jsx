import { useContext } from "react"
import { ThemeContext } from "../ContextProvider/ThemeContextProvider"
import styles from "./Navbar.module.css"
export const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    return (

        <div className={styles.nav} style={{
            border: theme === "dark" ? "2px solid beige" : "2px solid",
            // display: "flex"
        }}>
            <div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.GzP-QYd3ZX9hwo0KfK1QIgHaE8&pid=Api&rs=1&c=1&qlt=95&w=166&h=110" alt="logo" />
            </div>

            <div className={styles.btn}>
                <button style={{
                    background: theme === "light" ? "black" : "beige",
                    color: theme === "light" ? "beige" : "black",
                }}>login</button>
                <button style={{
                    background: theme === "light" ? "black" : "beige",
                    color: theme === "light" ? "beige" : "black",
                }}>logout</button>
            </div>



        </div >

    )
}