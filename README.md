# react-efficient-cursor

#### Efficient custom cursor for React Apps

[![NPM](https://img.shields.io/npm/v/react-efficient-cursor.svg)](https://www.npmjs.com/package/react-efficient-cursor)
[![Demo](https://img.shields.io/badge/-Demo-informational)](https://demondobf.github.io/react-efficient-cursor/)

## Install

```bash
npm i react-efficient-cursor
```

```bash
yarn add react-efficient-cursor
```

## Usage

```tsx
import EfficientCursor from 'react-efficient-cursor';

const App = () => {
  return (
    <div>
      <EfficientCursor>
        <div>Your component</div>
      </EfficientCursor>
    </div>
  );
};
```

## Advanced

##### Speed

To set the speed of the cursor simply pass a `speed` prop (it is not recommended to set it above
`1`).

```tsx
<EfficientCursor speed={0.2}>
  <div>Your component</div>
</EfficientCursor>
```

#### Offset

To specify the offset you can use a CSS variables or style your inner component yourself (e.g.
`position: relative; top: 100px;`).

```tsx
<EfficientCursor style={{ '--offset-x': '1em' }}>
  <div>Your component</div>
</EfficientCursor>
```

| Variable   | Default |
| ---------- | ------- |
| --offset-x | 100%    |
| --offset-y | 100%    |

## Todo

- Expose some event when hovering over a link or something.
- Expose acceleration.
