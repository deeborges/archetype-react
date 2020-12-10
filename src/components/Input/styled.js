import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    background-color: ${props.image};
  `}
`;
