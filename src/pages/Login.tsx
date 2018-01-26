import React from 'react';
import styled from 'styled-components';

import { Nav } from '../components/Nav';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  flex: 1 0 auto;
`;

export const Home = () => (
  <div>
    <Nav />
    <PageWrapper />
  </div>
)