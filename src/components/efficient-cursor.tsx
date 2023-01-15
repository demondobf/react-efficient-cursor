import type { HTMLAttributes, DetailedHTMLProps } from 'react';
import { useEffect, useRef } from 'react';
import type { CursorOptions } from '../types/cursor-options';
import { createCursor } from '../helpers/create-cursor';
import './efficient-cursor.css';

export type EfficientCursorProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & CursorOptions;

export const EfficientCursor = ({ children, className, speed = 0.1, onMove, ...props }: EfficientCursorProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const cursor = createCursor(containerRef.current, {
      speed,
      onMove,
    });

    cursor.init();

    return () => {
      cursor.destroy();
    };
  }, [speed, onMove]);

  return (
    <div ref={containerRef} className={getClassNames(className)} {...props}>
      {children}
    </div>
  );
};

const getClassNames = (className: string | undefined) => {
  const containerClassName = 'EfficientCursorContainer';

  if (!className) {
    return containerClassName;
  }

  return [containerClassName, className].join(' ');
};
