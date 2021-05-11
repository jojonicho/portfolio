import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Headroom from "react-headroom";
import SVG from "../components/SVG";
import tw from "twin.macro";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  transition: all ${(props) => props.theme.transitions.default.duration};
  &:hover {
    color: ${(props) => props.theme.colors.white.light};
    border: ${(props) => props.theme.colors.primary.light};
    filter: brightness(1.2);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    color: ${(props) => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${(props) => props.theme.transitions.default.duration};
    &:hover {
      color: ${(props) => props.theme.colors.secondary.base};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <SVG name="Logo" />
    </StyledLink>
    <Nav>
      <a is href="https://s.id/joni-resume">
        <p tw="font-black">Resume</p>
      </a>
      <Link to="/blog">
        <p tw="font-black">Blog</p>
      </Link>
    </Nav>
  </Headroom>
);

export default NavBar;
