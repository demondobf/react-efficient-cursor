import { useEffect, useRef } from 'react';
import styles from './EfficientCursor.module.css';
import Cursor from './Cursor';

interface EfficientCursorProps {
  children: React.ReactChild;
  speed?: number;
  [key: string]: any;
}

const EfficientCursor = ({ children, speed = 0.1, ...props }: EfficientCursorProps) => {
  const cursorRef = useRef(document.createElement('div'));

  const handleMount = () => {
    const cursor = new Cursor(cursorRef.current, speed);

    return () => {
      cursor.destroy();
    };
  };

  useEffect(handleMount, []);

  return (
    <div ref={cursorRef} className={styles.container} {...props}>
      {children}
    </div>
  );
};

export default EfficientCursor;
