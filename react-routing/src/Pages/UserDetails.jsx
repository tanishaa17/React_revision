import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from "./UserDetails.module.css"

export const UserDetails = () => {
    const { users_id } = useParams()
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);


    const fetchData = async (url) => {
        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data.data)
            setLoading(true);
            setUser(data.data);
            setLoading(false);
        } catch (error) {
            setErr(true);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData(`https://reqres.in/api/users/${users_id}`);
    }, [])
    if (loading) {
        return <h1>Loading....</h1>
    }
    if (err) {
        return <h1>Something went wrong......Please refresh</h1>
    }
    return (
        <div className={styles.user}>
            <div> <img src={user.avatar} alt="img" /></div>
            <p > ID: {user.id}</p>
            <p >Name: {user.first_name + " " + user.last_name}</p>
            <p > Email: {user.email}</p><hr />
        </div>
    )
}
