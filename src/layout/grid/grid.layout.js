import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Breakpoints, breakAt } from '../responsivity.layout';

export const Grid = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;

  ${breakAt(Breakpoints.sm)} {
    grid-template-columns: repeat(${(props) => props.sm}, 1fr);
  }
`;

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Grid.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};
