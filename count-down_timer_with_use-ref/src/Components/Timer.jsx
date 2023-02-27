import { useEffect, useRef, useState } from "react"
import styles from './Timer.module.css';

export default function Timer() {
    const [count, setCount] = useState(10);
    let intervalId = useRef(null);
    // useEffect(() => { }, []);
    const handleStart = () => {
        // console.log(`Button Clicked`);
        intervalId = setInterval(() => {
            setCount((newCount) => {
                if (newCount <= 1) {
                    clearInterval(intervalId);
                    return 0;
                }
                // console.log(`Timer is running fine`)
                return newCount - 1;
            });
        }, 1000);
    }
    const handleStop = () => {
        console.log(`Button Clicked`);

    }
    const handleReset = () => {
        // console.log(`Button Clicked`);
    }

    return (
        <>
            <h2>Timer : {count}</h2>
            <button className={styles.btn} onClick={handleStart}>Start</button>
            <button className={styles.btn} onClick={handleStop}>Stop</button>
            <button className={styles.btn} onClick={handleReset}>Reset</button>

        </>
    )
}