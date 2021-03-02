import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((prev) => prev + 1);

  const handleMount = () => {
    if (count >= 100) setCount(0);
    const interval = setInterval(incrementCount, 100);

    return () => {
      clearInterval(interval);
    };
  };

  useEffect(handleMount, [count]);

  return <div className="inner-component">{count}</div>;
};

export default Counter;
