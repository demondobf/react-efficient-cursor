export const getDefaultCoordinates = (x = 0.5, y = 0.5) => {
  return {
    current: { x, y },
    target: { x, y },
  };
};
