import * as React from 'react';

import EfficientCursor, { EffictiveCursorProps } from '../../src/components/EfficientCursor';
import './styles.css';

const SimpleCursor = (props: EffictiveCursorProps) => {
  return (
    <>
      <EfficientCursor speed={0.1} className="my-cursor-styles" {...props} />
      <EfficientCursor speed={0.2} className="my-cursor-styles" {...props} />
    </>
  );
};

export default SimpleCursor;
