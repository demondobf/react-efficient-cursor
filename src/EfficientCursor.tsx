interface EfficientCursorProps {
  children: React.ReactChild;
  speed?: number;
}

const EfficientCursor = ({ children }: EfficientCursorProps) => {
  return <div>{children}</div>;
};

export default EfficientCursor;
