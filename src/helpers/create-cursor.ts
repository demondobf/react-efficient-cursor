import type { CursorOptions } from '../types/cursor-options';
import { calculatePosition } from './calculate-position';
import { getDefaultCoordinates } from './get-default-coordinates';
import { isCursorIdle } from './is-cursor-idle';

export const createCursor = (element: HTMLElement, { speed = 0.1, onMove }: CursorOptions) => {
  const coordinates = getDefaultCoordinates();
  let frameId: number | null = null;

  const handleMouseMove = (event: MouseEvent) => {
    coordinates.target.x = event.clientX / window.innerWidth;
    coordinates.target.y = event.clientY / window.innerHeight;

    onMove?.(event);

    if (!frameId) {
      frameId = requestAnimationFrame(render);
    }
  };

  const render = () => {
    coordinates.current.x = calculatePosition(coordinates.current.x, coordinates.target.x, speed);
    coordinates.current.y = calculatePosition(coordinates.current.y, coordinates.target.y, speed);

    element.style.setProperty('--cursor-x', coordinates.current.x.toString());
    element.style.setProperty('--cursor-y', coordinates.current.y.toString());

    if (isCursorIdle(coordinates.current, coordinates.target)) {
      if (!frameId) {
        return;
      }

      cancelAnimationFrame(frameId);
      frameId = null;
    }

    frameId = requestAnimationFrame(render);
  };

  const init = () => {
    window.addEventListener('mousemove', handleMouseMove);
    frameId = requestAnimationFrame(render);
  };

  const destroy = () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };

  return {
    init,
    destroy,
  };
};
