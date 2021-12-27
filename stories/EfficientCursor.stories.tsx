import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EfficientCursor from '../src/components/EfficientCursor';

import SimpleCursor from './examples/SimpleCursor';
import CounterCursor from './examples/CounterCursor';
import InteractiveCursor from './examples/InteractiveCursor';

export default {
  title: 'EfficientCursor',
  component: EfficientCursor,
  argTypes: { children: { control: { type: null } } },
  parameters: {
    docs: {
      inlineStories: false,
      source: {
        code: `<EfficientCursor speed={0.1} onMove={handleMouseMove}>Your component</EfficientCursor>`,
      },
    },
  },
} as ComponentMeta<typeof EfficientCursor>;

export const Simple: ComponentStory<typeof EfficientCursor> = (args) => <SimpleCursor {...args} />;
export const Counter: ComponentStory<typeof EfficientCursor> = (args) => <CounterCursor {...args} />;
export const Interactive: ComponentStory<typeof EfficientCursor> = (args) => <InteractiveCursor {...args} />;
