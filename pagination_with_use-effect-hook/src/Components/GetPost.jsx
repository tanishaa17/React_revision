import { useState, useEffect } from "react";

const GetPost = () => {
    const [posts, setPosts] = useState([]);


    const fetchdata = async () => {
        try {
            let res = await fetch(
                `https://jsonplaceholder.typicode.com/todos`
            );
            let data = await res.json();
            console.log(data);

            setPosts(data);


        } catch (error) {
            console.log("Something went wrong");

        }
    };
    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            {posts.map((el) => {
                return (
                    <div key={el.id}>
                        <p> Id :- {el.id}</p>
                        <p> Title :- {el.title}</p>
                        <p> Status :- {el.completed ? "done" : "pending"}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default GetPost;
