import { viewports } from '../src/utils/utils.storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports
  }
};
