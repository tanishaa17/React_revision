import { useState, useEffect } from "react";

const GetPost = () => {
    const [pages, setPages] = useState(1);
    const [posts, setPosts] = useState([]);

    const fetchdata = async () => {
        try {
            let res = await fetch(
                `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${pages}`
            );
            let data = await res.json();
            // console.log(data);
            setPosts(data);

        } catch (error) {
            console.log("Something went wrong");
            
        }
    };
    useEffect(() => {
        fetchdata();
    }, [pages]);

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
            {/* PAGINATION */}
            <div>
                <button
                    disabled={pages === 1}
                    onClick={() => {
                        setPages(pages - 1);
                    }}
                >
                    Prev
                </button>
                <button>{pages}</button>
                <button
                    onClick={() => {
                        setPages(pages + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
export default GetPost;
