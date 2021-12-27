import * as React from 'react';

import './EfficientCursor.css';
import createCursor from '../helpers/createCursor';
import { CursorOptions } from '../types';

export type EffictiveCursorProps = React.HTMLAttributes<HTMLDivElement> & CursorOptions;

const EfficientCursor = ({ children, speed = 0.1, onMove, ...props }: EffictiveCursorProps) => {
  const container = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!container.current) return;
    return createCursor(container.current, { speed, onMove });
  }, [speed, onMove]);

  return (
    <div {...props} ref={container} className={getClassNames(props.className)}>
      {children}
    </div>
  );
};

const getClassNames = (userClassNames: string | undefined) => {
  const container = 'EfficientCursor_container';
  if (!userClassNames) return container;
  return [container, userClassNames].join(' ');
};

export default EfficientCursor;
