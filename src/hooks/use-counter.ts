import { useEffect, useState } from "react";



export default function useCounter(isForward = true) {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isForward) {
        setCounter((prevCounter) => prevCounter + 1);
      }
      else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isForward]);

  return counter;
}