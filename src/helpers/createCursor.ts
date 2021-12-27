import { CursorOptions } from '../types';
import calculatePosition from './calculatePosition';
import getDefaultCoords from './getDefaultCoords';
import isCursorIdle from './isCursorIdle';

const createCursor = (element: HTMLElement, options: CursorOptions) => {
  const { speed = 0.1, onMove } = options;

  const coords = getDefaultCoords();
  let frameId: number | null = null;

  const handleMouseMove = (e: MouseEvent): void => {
    coords.destination.x = e.clientX / window.innerWidth;
    coords.destination.y = e.clientY / window.innerHeight;

    if (onMove) onMove(e);
    if (!frameId) frameId = requestAnimationFrame(render);
  };

  const render = (): void => {
    coords.ghost.x = calculatePosition(coords.ghost.x, coords.destination.x, speed);
    coords.ghost.y = calculatePosition(coords.ghost.y, coords.destination.y, speed);

    element.style.setProperty('--cursor-x', coords.ghost.x.toString());
    element.style.setProperty('--cursor-y', coords.ghost.y.toString());

    if (isCursorIdle(coords.ghost, coords.destination)) {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
      return;
    }

    frameId = requestAnimationFrame(render);
  };

  window.addEventListener('mousemove', handleMouseMove);
  frameId = requestAnimationFrame(render);

  return () => window.removeEventListener('mousemove', handleMouseMove);
};

export default createCursor;
