import { useEffect, useState } from 'react';
import { EfficientCursor, EfficientCursorProps } from '../../components/efficient-cursor';
import './styles.css';

export const CounterCursor = (props: EfficientCursorProps) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count > 100) {
      setCount(0);
    }

    const interval = setInterval(incrementCount, 100);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <EfficientCursor className="my-cursor-styles" {...props}>
      <span>{count}</span>
    </EfficientCursor>
  );
};
