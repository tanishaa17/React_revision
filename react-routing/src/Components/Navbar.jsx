import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"
export const Navbar = () => {
    const links = [
        { to: "/", title: "Home" },
        { to: "/about", title: "About" },
        { to: "/contacts", title: "Contacts" },
        { to: "/login", title: "Login" },
        { to: "/user", title: "Users" }
    ]
    return (
        <div className={styles.nav}>
            {links.map((elem) => (
                <Link className={styles.link} to={elem.to}>{elem.title}</Link >
            ))}
            {/* <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="/about">About</Link>
            <Link className={styles.link} to="/contacts">Contacts</Link>
            <Link className={styles.link} to="/login">Login</Link>
            <Link className={styles.link} to="/user">Users</Link> */}

        </div>
    )
}
