import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonColors = {
	default: 'default',
	primary: 'primary',
	danger: 'danger',
};

const ButtonVariants = {
	default: 'default',
	outlined: 'outlined',
	link: 'link',
};

const getMainColor = ({ theme, color }) => {
	switch (color) {
		case ButtonColors.primary:
			return theme.colors.blue;
		case ButtonColors.danger:
			return theme.colors.red;
		default:
			return '#e0e0e0';
	}
};

const getColorText = (props) => props.theme.colors.purple;
const getOutlinedColorText = (props) => {
	if (props.color == ButtonColors.default) {
		return '#212121';
	}
	return getMainColor(props);
};
const getLinkColorText = (props) => {
	if (props.color == ButtonColors.default) {
		return '#757575';
	}
	return getMainColor(props);
};

export const Button = styled.button`
	font-size: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	padding: 12px 36px;
	cursor: pointer;
	background-color: ${getMainColor};
	border: 2px solid ${getMainColor};
	color: ${getColorText};

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	&:hover:enabled {
		background-color: '#c3c3c3';
	}
`;

const ButtonOutlined = styled(Button)`
	background-color: transparent;
	color: ${getOutlinedColorText};

	&:hover:enabled {
		background-color: transparent;
		color: ${getOutlinedColorText};
	}
`;

const ButtonLink = styled(Button)`
	background-color: transparent;
	border-color: transparent;
	color: ${getLinkColorText};
	padding-left: 0;
	padding-right: 0;

	&:hover:enabled {
		background-color: transparent;
		opacity: 0.7;
	}
`;

const ButtonWrapper = (props) => {
	switch (props.variant) {
		case ButtonVariants.outlined:
			return <ButtonOutlined {...props} />;
		case ButtonVariants.link:
			return <ButtonLink {...props} />;
		default:
			return <Button {...props} />;
	}
};

ButtonWrapper.defaultProps = {
	type: 'button',
	children: undefined,
	color: 'default',
	variant: 'default',
};

ButtonWrapper.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node,
	color: PropTypes.oneOf(Object.values(ButtonColors)),
	variant: PropTypes.oneOf(Object.values(ButtonVariants)),
};

export default ButtonWrapper;
