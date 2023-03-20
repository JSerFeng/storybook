import type { StorybookConfig } from './types';

export * from './types';

export const addons: StorybookConfig['addons'] = [
  require.resolve('@storybook/preset-react-rspack/dist/framework-preset-react'),
];
