import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios';


export const App = () => {
  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/users`,
    // {
    //   params:{
    //     id:2
    //   }
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    axios.post(`https://jsonplaceholder.typicode.com/users`, {
      userId: 5,
      title: "anything",
      body: "Something about anything"
    }).then((res) => console.log(res))
  }, [])
  return (
    <div>App</div>
  )
}
