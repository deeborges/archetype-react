// import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonColors = {
  danger: 'danger',
  default: 'deafult',
  primary: 'primary'
};

// export const Button = ({ type, children }) => (
//   <button type={type}>{children}</button>
// );

export const Button = styled.button``;

Button.defaultProps = {
  children: undefined,
  color: 'default',
  type: 'button'
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  type: PropTypes.string
};
