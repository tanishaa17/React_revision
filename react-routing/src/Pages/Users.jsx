import React, { useEffect, useState } from 'react'
import styles from "./Users.module.css"
export const Users = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);


    const fetchData = async (url) => {
        try {
            let res = await fetch(url);
            let data = await res.json();
            // console.log(data.data);
            setLoading(true);
            setUserData(data.data);
            setLoading(false);
        } catch (error) {
            setErr(true);
            setLoading(false)
            // console.log("Something went wrong");
        }
    }
    useEffect(() => {
        fetchData(`https://reqres.in/api/users`);
        // console.log(userData);
    }, [])

    return loading ? <h1>Loading.....</h1> :
        err ? <h1>"Something went wrong"</h1> :
            (
                <>
                    <h2 >User data</h2>
                    {userData.map(({ avatar, first_name, last_name }) => {
                        return (
                            <div className={styles.user}>
                                <div> <img src={avatar} alt="img" /></div>
                                <span >{first_name + " " + last_name}</span> <hr />
                            </div>
                        )
                    })}
                </>
            )
}
