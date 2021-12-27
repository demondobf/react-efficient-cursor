import * as React from 'react';
import EfficientCursor, { EffictiveCursorProps } from '../../src/components/EfficientCursor';

const INTERACTIVE_ELEMENTS = ['BUTTON', 'A'];
const isOnInteractiveElement = (element: HTMLElement) => INTERACTIVE_ELEMENTS.includes(element.tagName);

const InteractiveCursor = (props: EffictiveCursorProps) => {
  const [hovering, setHovering] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const handleMouseEnter = React.useCallback((e: MouseEvent) => {
    const onSelect = isOnInteractiveElement(e.target as HTMLElement);
    setHovering(onSelect);
  }, []);

  React.useEffect(() => {
    const handleMouseDown = () => setPressed(true);
    const handleMouseUp = () => setPressed(false);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const styles = {
    fontSize: '3rem',
    transform: `scale(${pressed ? 0.8 : 1})`,
    transition: 'transform 100ms ease',
  };

  return (
    <>
      <div style={{ display: 'grid', justifyItems: 'start', gap: 20 }}>
        <button>Hover over me!</button>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Hover over me!
        </a>
      </div>

      <EfficientCursor onMove={handleMouseEnter} {...props}>
        <div style={styles}>{hovering ? '✨' : '🐶'}</div>
      </EfficientCursor>
    </>
  );
};

export default InteractiveCursor;
