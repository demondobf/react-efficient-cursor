import { CursorCoords } from '../types';

const calculateDifference = (current: CursorCoords, target: CursorCoords) => {
  return Math.sqrt(Math.pow(target.x - current.x, 2) + Math.pow(target.y - current.y, 2));
};

export default calculateDifference;
