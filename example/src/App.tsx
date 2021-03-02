import EfficientCursor from 'react-efficient-cursor';

import SimpleComponent from './components/SimpleComponent';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <EfficientCursor speed={0.2}>
        <SimpleComponent />
      </EfficientCursor>

      <EfficientCursor>
        <Counter />
      </EfficientCursor>
    </div>
  );
};

export default App;
