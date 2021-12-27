import * as React from 'react';

import EfficientCursor from '../../src/components/EfficientCursor';
import './styles.css';

const CounterCursor = () => {
  const [count, setCount] = React.useState(0);
  const incrementCount = () => setCount((prev) => prev + 1);

  React.useEffect(() => {
    if (count >= 100) setCount(0);
    const interval = setInterval(incrementCount, 100);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <EfficientCursor className="my-cursor-styles">
      <span>{count}</span>
    </EfficientCursor>
  );
};

export default CounterCursor;