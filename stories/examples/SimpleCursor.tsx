import * as React from 'react';
import EfficientCursor, { EffictiveCursorProps } from '../../src/components/EfficientCursor';
import './styles.css';

const SimpleCursor = (props: EffictiveCursorProps) => {
  return (
    <>
      <EfficientCursor className="my-cursor-styles" speed={props.speed} {...props} />
      <EfficientCursor className="my-cursor-styles" speed={getSpeedForSecondRing(props.speed)} {...props} />
    </>
  );
};

const getSpeedForSecondRing = (speed = 0.1) => {
  const calculatedSpeed = speed * 2;
  if (calculatedSpeed >= 1) return 1;
  return calculatedSpeed;
};

export default SimpleCursor;
