import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(15);


  return (
    <>
      <h2>Timer : {count}</h2>
    </>
  );
};
export default Timer;
