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
           
        </div>
    );
};
export default GetPost;
