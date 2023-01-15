import { EfficientCursor, EfficientCursorProps } from '../../components/efficient-cursor';
import './styles.css';

export const SimpleCursor = ({ speed, ...props }: EfficientCursorProps) => {
  return (
    <>
      <EfficientCursor className="my-cursor-styles" speed={speed} {...props} />
      <EfficientCursor className="my-cursor-styles" speed={getSpeedForSecondRing(speed)} {...props} />
    </>
  );
};

const getSpeedForSecondRing = (speed = 0.1) => {
  const calculatedSpeed = speed * 2;

  if (calculatedSpeed > 1) {
    return 1;
  }

  return calculatedSpeed;
};
