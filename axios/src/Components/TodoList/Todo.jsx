import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AddTodo } from './AddTodo'
import { TodoItems } from './TodoItems'

const getdata = (() => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
})
export const Todo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getdata()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <AddTodo />
            {/* {console.log(data)} */}
            {data.map((elem) => (
                <div key={elem.id}>
                    <h3> Name- {elem.name}</h3>
                    <p>Email-  {elem.email}</p>
                    <p>Contact No- {elem.phone}</p>
                    <hr />
                </div>
            )
            )}
        </div>
    )
}
