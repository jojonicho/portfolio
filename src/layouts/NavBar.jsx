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
    margin-left: 2rem;
    transition: all ${(props) => props.theme.transitions.default.duration};
  }
  span {
    margin-right: -1.5rem;
    margin-left: 0.5rem;
    color: ${(props) => props.theme.colors.secondary.base};
  }
`;

const RESUME_DOWNLOAD_URL =
  "https://github.com/jojonicho/jojonicho/releases/latest/download/JonathanNicholas_Resume.pdf";
const RESUME_VIEW_URL =
  "https://github.com/jojonicho/jojonicho/blob/master/JonathanNicholas_Resume.pdf";

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <SVG name="Logo" />
    </StyledLink>
    <Nav>
      <a target="_blank" href={RESUME_VIEW_URL} tw="font-black">
        Resume (View
      </a>
      <span tw="font-black">or</span>
      <a target="_blank" href={RESUME_DOWNLOAD_URL} tw="font-black">
        Download)
      </a>
      <Link to="/blog">
        <p tw="font-black">Blog</p>
      </Link>
    </Nav>
  </Headroom>
);

export default NavBar;
