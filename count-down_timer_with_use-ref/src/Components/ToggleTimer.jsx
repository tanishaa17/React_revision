import { useState } from "react";
import Timer from "./Timer";
import styles from './Timer.module.css';
export default function ToggleTimer() {
    const [showTimer, setShowTimer] = useState(true);
    const handleClick = () => {
        setShowTimer(!showTimer);
    };
    return (
        <>
            {showTimer && <Timer />} <br /> <br />
            <button className={styles.btn} onClick={handleClick}>
                {showTimer ? "Hide Timer" : "Show Timer"}
            </button>
        </>
    );
}
