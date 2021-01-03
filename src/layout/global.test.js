// teste de regrecao
import React from 'react';
import { render } from '@testing-library/react';

import LayoutGlobal from './global.layout';

test('renderizar o estilo global', () => {
	render(<LayoutGlobal />);
	expect(document.head).toMatchSnapshot();
});
