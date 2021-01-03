import React from 'react';
import { render, fireEvent } from '../../test-utils.js';
import Button, { ButtonColors, ButtonVariants } from './Button';

test('renderizar um botao com um texto', () => {
	const { getByText } = render(<Button>botão de teste</Button>);
	expect(getByText('botão de teste')).toBeInTheDocument();
});

test('disparar um evento ao clickar', () => {
	const handleClick = jest.fn();

	const { getByRole } = render(
		<Button onClick={handleClick}>Click here</Button>
	);
	fireEvent.click(getByRole('button'));
	expect(handleClick).toBeCalled();
});

test.each(Object.values(ButtonColors).map((item) => [item]))(
	'renderizar com cor %s',
	(color) => {
		const { asFragment } = render(
			<Button color={color}>botão de teste</Button>
		);
		expect(asFragment()).toMatchSnapshot();
	}
);

test.each(Object.values(ButtonVariants).map((item) => [item]))(
	'renderizar a variacao %s',
	(variant) => {
		const { asFragment } = render(
			<Button variant={variant}>botão de teste</Button>
		);
		expect(asFragment()).toMatchSnapshot();
	}
);

test('renderizar com cor primary e variant outlined', () => {
	const { asFragment } = render(
		<Button color="primary" variant="outlined">
			botão de teste
		</Button>
	);
	expect(asFragment()).toMatchSnapshot();
});
