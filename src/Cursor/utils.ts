export const calculatePosition = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export const calculateDifference = (current: Matrix, target: Matrix) => {
  return Math.sqrt(Math.pow(target.x - current.x, 2) + Math.pow(target.y - current.y, 2));
};
