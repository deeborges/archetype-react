import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';

const theme = {
	colors: {
		blue: '#00BAD0',
		green: '#00C9B5',
		purple: '#2F2A84',
		yellow: '#F5BD03',
		white: '#ffffff',
		red: 'red',
	},
	fonts: {
		montserrat: {
			regular: 'Montserrat-Regular',
			semibold: 'Montserrat-SemiBold',
		},
	},
};

const ThemeProvider = ({ children }) => {
	return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
