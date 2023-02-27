import { useEffect, useRef, useState } from "react"
import styles from './Timer.module.css';

// function to set a timer in proper format
const addZeroBefore = (val) => {
    return val <= 9 ? `0${val}` : val;
}
const createTimerInStrFormat = (valInSecs) => {
    const sec = valInSecs % 60;
    const min = Math.floor(valInSecs / 60) % 60;
    const hour = Math.floor(valInSecs / 3600) % 60;
    return `${addZeroBefore(hour)}:${addZeroBefore(min)}:${addZeroBefore(sec)}`
}
export default function Timer() {
    const [count, setCount] = useState(3670);
    let intervalId = useRef(null);
    useEffect(() => {
        const cleanup = () => {
            handlePause();
            console.log(`cleanup called`)
        }
        return cleanup;
    }, []);
    const handleStart = () => {
        // console.log(`Button Clicked`);
        if (intervalId.current !== null) {
            return;
        }
        intervalId.current = setInterval(() => {
            setCount((newCount) => {
                if (newCount == 0) {
                    clearInterval(intervalId.current);
                    return 0;
                }
                console.log(`Timer is running fine`, Date.now())
                return newCount - 1;
            });
        }, 1000);
    }
    const handlePause = () => {
        // console.log(`Button Clicked`);
        clearInterval(intervalId.current);
        intervalId.current = null;
    }
    const handleReset = () => {
        // console.log(`Button Clicked`);
        handlePause();
        setCount(0);
    }

    return (
        <>
            <h2>Timer : {createTimerInStrFormat(count)}</h2>
            <button className={styles.btn} onClick={handleStart}>Start</button>
            <button className={styles.btn} onClick={handlePause}>Pause</button>
            <button className={styles.btn} onClick={handleReset}>Reset</button>

        </>
    )
}