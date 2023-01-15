interface Coordinates {
  x: number;
  y: number;
}

export const isCursorIdle = (current: Coordinates, target: Coordinates): boolean => {
  const differance = Math.sqrt(Math.pow(target.x - current.x, 2) + Math.pow(target.y - current.y, 2));

  return differance < 0.001;
};
