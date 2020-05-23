import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';

const StyledLink = styled(Link)`
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily.body};
  color: ${props => props.theme.colors.secondary.base};
  transition: all ${props => props.theme.transitions.default.duration};
  &:hover {
    color: ${props => props.theme.colors.white.grey};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      Home
      {/* <img src={logo} alt="Gatsby Logo" /> */}
      {/* <Link to="/">Home</Link> */}
    </StyledLink>
    <Nav>
      <a href="https://cv.jojonicho.wtf">CV</a>
      <Link to="/blog">Blog</Link>
      {/* <Link to="/about">About</Link> */}
    </Nav>
  </Headroom>
);

export default NavBar;
