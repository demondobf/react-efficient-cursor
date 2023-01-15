import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { EfficientCursor } from '../components/efficient-cursor';
import { SimpleCursor } from './examples/simple-cursor';
import { CounterCursor } from './examples/counter-cursor';
import { InteractiveCursor } from './examples/interactive-cursor';

export default {
  title: 'EfficientCursor',
  component: EfficientCursor,
} as ComponentMeta<typeof EfficientCursor>;

export const Simple: ComponentStory<typeof EfficientCursor> = (args) => <SimpleCursor {...args} />;
export const Counter: ComponentStory<typeof EfficientCursor> = (args) => <CounterCursor {...args} />;
export const Interactive: ComponentStory<typeof EfficientCursor> = (args) => <InteractiveCursor {...args} />;
