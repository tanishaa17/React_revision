import React from 'react'

export const Navbar = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", fontWeight: "bolder", fontSize: "30px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/login">Login</Link>
            <Link to="/user">Users</Link>

        </div>
    )
}
