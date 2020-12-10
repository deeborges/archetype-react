import React from 'react';
import { ThemeProvider as LayoutProvider } from 'styled-components';

const theme = {
  colors: {
    blue: '#00BAD0',
    green: '#00C9B5',
    purple: '#2F2A84',
    yellow: '#F5BD03',
    white: '#F3F3F3'
  },
  fonts: {
    montserrat: {
      regular: 'Montserrat-Regular',
      semibold: 'Montserrat-SemiBold'
    }
  }
};

const ThemeProvider = ({ children }) => {
  return <LayoutProvider theme={theme}>{children}</LayoutProvider>;
};

export default ThemeProvider;
