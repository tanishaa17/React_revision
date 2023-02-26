import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
    };
    const handleLess = () => {
        setCount(count - 1);
    };
    return (
        <div id={styles.mainDiv}>
            <h1>Counter : {count}</h1>
            <button disabled={count < 1} onClick={handleLess}> - </button>
            <button onClick={handleAdd}> + </button>
        </div>
    );
};
export default Counter;
