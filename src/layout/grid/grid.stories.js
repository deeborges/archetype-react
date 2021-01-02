import React from 'react';
import styled from 'styled-components';

import { Grid } from './grid.layout';

export default {
  title: 'Layouts/Grid',
  component: Grid,
};

const GridItem = styled.div`
  background-color: indigo;
  height: 200px;
`;

export const usage = () => (
  <Grid sm={10}>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
    <GridItem></GridItem>
  </Grid>
);
