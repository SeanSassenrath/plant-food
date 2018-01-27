import React from 'react';
import styled from 'styled-components';

import { User } from '../models/User';

import { Nav } from '../components/Nav';

const user = User.create({
  name: 'sean',
  isLoggedIn: true,
})

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 0 auto;
`;

export const Home = () => (
  <PageWrapper>
    <Nav user={user}/>
    <Content />
  </PageWrapper>
)