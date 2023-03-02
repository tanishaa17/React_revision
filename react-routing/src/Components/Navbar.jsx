import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
const links = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About" },
    { to: "/contacts", title: "Contacts" },
    { to: "/login", title: "Login" },
    { to: "/user", title: "Users" }
]
export const Navbar = () => {
    const activeLink = { color: "black" };
    const defaultLink = { color: "rgb(20, 80, 141)" };
    return (
        <div className={styles.nav}>
            {links.map(({ to, title }) => (
                <NavLink
                    style={({ isActive }) => {
                        return isActive ? activeLink : defaultLink;
                    }}
                    key={to} className={styles.link} to={to}>{title}</NavLink >
            ))}
            {/* <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="/about">About</Link>
            <Link className={styles.link} to="/user">Users</Link> */}

        </div>
    )
}
