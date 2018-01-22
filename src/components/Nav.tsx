import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  align-items: center;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const Logo = styled.span`
  background-color: red;
  border-radius: 50%;
  display: block;
  height: 25px;
  width: 25px;
`;

const NavList = styled.ul`
  display: flex;
  padding: 0;
`

interface NavListItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavLink = styled.a`
  text-decoration: none;
  color: #322a2b;
`

const NavItem = styled((props: NavListItemProps) => (
  <li className={ props.className }>
    <NavLink href="google.com">
      { props.children }
    </NavLink>
  </li>
))`
  list-style: none;
  margin: 0 5px;
  padding: 8px;
`;

export const Nav = () => (
  <Wrapper>
    <Logo />
    <NavList>
      <NavItem>About</NavItem>
      <NavItem>Contact</NavItem>
      <NavItem>Sign In</NavItem>
      <NavItem>Log In</NavItem>
    </NavList>
  </Wrapper>
)