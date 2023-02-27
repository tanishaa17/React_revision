import { useState } from "react"
import styles from './Timer.module.css';

export default function Timer() {
    const [count, SetCount] = useState(10);
    const handleStart = () => {
        console.log(`Button Clicked`);
    }
    const handleStop = () => {
        console.log(`Button Clicked`);
    }
    const handleReset = () => {
        console.log(`Button Clicked`);
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