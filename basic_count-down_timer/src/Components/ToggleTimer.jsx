import { useState } from "react";
import Timer from "./Timer";
export default function ToggleTimer() {
  const [showTimer, setShowTimer] = useState(true);
  const handleClick = () => {
    setShowTimer(!showTimer);
  };
  return (
    <>
      {showTimer && <Timer />}
      <button onClick={handleClick}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </>
  );
}
