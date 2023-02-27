import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log({ count });
      // console.log(count, "prev"); It would be taking iniatial value only i.e. outdated value
      // console.log("timer running");
      setCount((newCount) => {
        if (newCount <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return newCount - 1;
      });
    }, 1000);
    const cleanUpFunc = () => {
      clearInterval(intervalId);
      // console.log("Cleanup called");
    };
    return cleanUpFunc;
  }, []);

  return (
    <>
      <h2>Timer : {count}</h2>
    </>
  );
};
export default Timer;
