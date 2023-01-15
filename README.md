# react-efficient-cursor

Efficient custom cursor for React Apps

[![Version](https://img.shields.io/npm/v/react-efficient-cursor.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/react-efficient-cursor)
[![Build Size](https://img.shields.io/bundlephobia/minzip/react-efficient-cursor?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=react-efficient-cursor)
[![Downloads](https://img.shields.io/npm/dt/react-efficient-cursor.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/react-efficient-cursor)
[![Examples](https://img.shields.io/badge/-examples-000000)](https://react-efficient-cursor.vercel.app/)

## Install

```bash
npm i react-efficient-cursor
```

```bash
yarn add react-efficient-cursor
```

```bash
pnpm add react-efficient-cursor
```

## Usage

```tsx
import { EfficientCursor } from 'react-efficient-cursor';

const MyCursor = () => {
  return (
    <EfficientCursor>
      <span>Your component</span>
    </EfficientCursor>
  );
};
```

## Speed

To set the speed of the component following the cursor - simply pass a `speed` prop.

Ideal ranges are between `0` and `1`.

```tsx
<EfficientCursor speed={0.2} />
```

## Styles

You can style the cursor by styling it just like a regular component, via `style`, `className` or you can just style **inner component** yourself.

```tsx
<EfficientCursor className="my-custom-styles" style={{ '--offset-x': '1em' }} />
```

## Interactions

You can pass a callback to `onMove` prop to retrieve all the informations about the cursor, e.g. its target or coordinates.

```tsx
<EfficientCursor onMove={(e) => console.log(e)} />
```
