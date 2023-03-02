import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from "./Users.module.css"

const currentPage = (page) => {
    let pageNum = Number(page);
    if (typeof (pageNum) !== Number || pageNum <= 1) {
        pageNum = 1;
    }
    return pageNum;
}
export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(currentPage(searchParams.get("page")));
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
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
        }
    }
    useEffect(() => {
        fetchData(`https://reqres.in/api/users?page=${page}`);
        // console.log(userData);
    }, [page]);

    useEffect(() => {
        setSearchParams({ page: page })
    }, [page])

    const handlePages = (val) => {
        const updatePage = page + val
        setPage(updatePage);
    }
    if (loading) {
        return <h1>Loading....</h1>
    }
    if (err) {
        return <h1>Something went wrong......Please refresh</h1>
    }
    return loading ? <h1>Loading.....</h1> :
        err ? <h1>"Something went wrong"</h1> :
            (
                <>
                    <h2 >User data</h2>
                    <button onClick={() => navigate("/")}>Go to home page</button>
                    {userData.map(({ avatar, first_name, last_name, id, email }) => {
                        return (
                            <>
                                <div key={id} className={styles.user}>
                                    <div> <img src={avatar} alt="img" /></div>
                                    <p >Name: {first_name + " " + last_name}</p>
                                    <p > Email: {email}</p>
                                    <Link to={`/users/${id}`}>More Info</Link><hr />
                                </div>


                            </>
                        )
                    })}

                    <button disabled={page <= 1} onClick={() => handlePages(-1)}>Prev</button>
                    <button disabled>{page}</button>
                    <button onClick={() => handlePages(1)}>Next</button>
                </>
            )
}
