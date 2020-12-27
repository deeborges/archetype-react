import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonColors = {
  danger: 'danger',
  default: 'deafult',
  primary: 'primary'
};

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: #ffc107;
  border: 2px solid #ffc107;
  color: ${(props) => props.theme.colors.yellow};
`;

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
