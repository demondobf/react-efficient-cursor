import { useCallback, useEffect, useState } from 'react';
import { EfficientCursor, EfficientCursorProps } from '../../components/efficient-cursor';

const INTERACTIVE_ELEMENTS = ['BUTTON', 'A'];
const isOnInteractiveElement = (element: HTMLElement) => INTERACTIVE_ELEMENTS.includes(element.tagName);

export const InteractiveCursor = (props: EfficientCursorProps) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMove = useCallback((e: MouseEvent) => {
    setIsInteracting(isOnInteractiveElement(e.target as HTMLElement));
  }, []);

  useEffect(() => {
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const styles = {
    fontSize: '3rem',
    transform: `scale(${isPressed ? 0.8 : 1})`,
    transition: 'transform 100ms ease',
  };

  return (
    <>
      <div style={{ display: 'grid', justifyItems: 'start', gap: 20 }}>
        <button>Hover over me!</button>
        <a href="#">Hover over me!</a>
      </div>

      <EfficientCursor onMove={handleMove} {...props}>
        <div style={styles}>{isInteracting ? '✨' : '🐶'}</div>
      </EfficientCursor>
    </>
  );
};
