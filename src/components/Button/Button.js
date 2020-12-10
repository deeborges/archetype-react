// import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// export const Button = ({ type, children }) => (
//   <button type={type}>{children}</button>
// );

export const Button = styled.button``;

Button.defaultProps = {
  type: 'button',
  children: undefined
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};
