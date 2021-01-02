import React from 'react';

import LayoutGlobal from '../src/layout/global.layout';
import ThemeProvider from '../src/providers/theme.provider';
import { viewports } from '../src/utils/utils.storybook';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	viewport: {
		viewports,
	},
};

export const decorators = [
	(Story) => (
		<>
			<LayoutGlobal />
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		</>
	),
];
