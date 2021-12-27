const getDefaultCoords = (x: number = 0.5, y: number = 0.5) => {
  return {
    destination: { x, y },
    ghost: { x, y },
  };
};

export default getDefaultCoords;
