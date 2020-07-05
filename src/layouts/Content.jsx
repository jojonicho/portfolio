import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import prism from "../styles/prism";

const Wrapper = styled.div`
  ${prism};
  display: flex;
  flex-direction: column;
  justify-content: center;
  code {
    display: block;
    font-size: calc(0.6vw + 6px);
  }
  .language-text {
    display: inline-block;
    margin: 0;
    transform: translate(0, 33%);
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      transform: translate(0, 40%);
    }
    padding: 0.1rem 0.2rem;
  }
  p,
  li {
    letter-spacing: -0.004em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: calc(0.5vw + 0.5rem);
    line-height: 1.9;
    margin: 0.25rem;
    color: black;
    img {
      display: block;
      margin: auto;
    }
  }
  ul {
    margin-bottom: 0;
  }
  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: black;
    box-shadow: inset 0 -2px 0 ${(props) => props.theme.colors.primary.base};
    border-bottom: 1px solid ${(props) => props.theme.colors.primary.base};
    transition: ${(props) => props.theme.transitions.default.transition};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${(props) => props.theme.colors.primary.base};
      color: black;
    }
  }
  h1 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: calc(1rem + 0.6vw);
  }
  h3 {
    margin-top: 1.5rem;
    margin-bottom: 0rem;
    font-size: calc(0.7rem + 0.4vw);
  }
  h4,
  h5 {
    display: inline-block;
    position: relative;
    font-size: calc(1.3vw + 15px);
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
  h6 {
    font-size: calc(0.55rem + 0.3vw);
    text-align: center;
    margin: 0;
  }
`;

const Content = ({ input }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
