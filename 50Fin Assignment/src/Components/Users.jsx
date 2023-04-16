import axios from 'axios'
import React, { useEffect, useState } from 'react'

// FETCHED THE USERS
const fetchUser = async () => {
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        // console.log(res.data)
        return res.data;
    } catch (error) {
        console.log("Error : ", error)
    }
}

export const Users = () => {
    const [data, setData] = useState([]);

    // GOT THE USER DATA
    const getData = async () => {
        try {
            const data = await fetchUser()
            // console.log(data)
            setData(data)
        } catch (error) {
            console.log("Error : ", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    // MAPPING THE USER DATA
    return (
        <div>Users</div>
    )
}
