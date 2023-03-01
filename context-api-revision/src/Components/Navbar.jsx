import { useContext } from "react"
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { ThemeContext } from "../ContextProvider/ThemeContextProvider"
import styles from "./Navbar.module.css"
export const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const { logIn, logOut, isAuth } = useContext(AuthContext)
    return (

        <div className={styles.nav} style={{
            border: theme === "dark" ? "2px solid beige" : "2px solid",
        }}>

            <div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.GzP-QYd3ZX9hwo0KfK1QIgHaE8&pid=Api&rs=1&c=1&qlt=95&w=166&h=110" alt="logo" />
            </div>
            <div>
                User Authenticated: {isAuth ? "Yes" : "No"}
            </div>

            <div className={styles.btn}>

                {/* We can also re-use the button component from changeTheme here-                
                <ChangeTheme onClick={()=>{}} btntxt={"login"} />
                <ChangeTheme onClick={()=>{}} btntxt={"logout"} /> */}

                <button disabled={isAuth} onClick={logIn}
                    style={{
                        background: theme === "light" ? "black" : "beige",
                        color: theme === "light" ? "beige" : "black",
                    }}>
                    login
                </button>
                <button disabled={!isAuth} onClick={logOut}
                    style={{
                        background: theme === "light" ? "black" : "beige",
                        color: theme === "light" ? "beige" : "black",
                    }}>
                    logout
                </button>
            </div>



        </div >

    )
}