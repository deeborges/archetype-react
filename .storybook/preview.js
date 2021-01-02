import React from 'react';
import { select } from '@storybook/addon-knobs';

import LayoutGlobal from '../src/layout/global.layout';
import ThemeProvider, { ThemeNames } from '../src/providers/theme.provider';
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
			<ThemeProvider theme={select('Theme', ThemeNames, ThemeNames.light)}>
				<Story />
			</ThemeProvider>
		</>
	),
];
