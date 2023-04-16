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
        <div>
            {data.length === 0 ? "No data Available, please add a user" :
                data.map((elem) => {
                    return (
                        <div key={elem.id}>
                            <p>{`ID : ${elem.id}`}</p>
                            <p>{`Name : ${elem.name}`}</p>
                            <p>{`Username : ${elem.username}`}</p>
                            <p>{`Email : ${elem.email}`}</p>
                            <p>{`Phone No : ${elem.phone}`}</p>
                        </div>
                    )
                })}
        </div>
    )
}
