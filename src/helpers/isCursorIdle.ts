import { CursorCoords } from '../types';
import calculateDifference from './calculateDifference';

const isCursorIdle = (ghost: CursorCoords, destination: CursorCoords): boolean => {
  return calculateDifference(ghost, destination) < 0.001;
};

export default isCursorIdle;
