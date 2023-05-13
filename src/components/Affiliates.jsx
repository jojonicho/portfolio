import React from "react";
import styled from "@emotion/styled";
import SVG from "../components/SVG";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: calc(0.5vw + 0.1rem);
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 0.1rem 0 1rem;
  }
  a {
    margin: 0.4vw calc(0.15rem + 0.2vw);
    color: ${(props) => props.theme.colors.black.blue};
    border-radius: 10px;
    &:hover {
      color: ${(props) => props.theme.colors.white.light};
      border: ${(props) => props.theme.colors.primary.light};
    }
  }
  svg {
    transition: all 300ms ease-in-out;
    fill: ${(props) => props.theme.colors.white.light};
    box-shadow: ${(props) => props.theme.shadow.feature.small.hover};
    &:hover {
      fill: ${(props) => props.theme.colors.secondary.base};
    }
  }
`;
const affiliates = [
  {
    logo: "Linkedin",
    link: "https://www.linkedin.com/in/joni",
  },
  {
    logo: "Github",
    link: "https://www.github.com/jojonicho",
  },
  {
    logo: "Leetcode",
    link: "https://leetcode.com/jojonicho",
  },
];

const External = styled.a`
  padding: 0px;
  width: calc(0.5vw + 22px);
  margin: 0px;
`;

const Affiliates = () => (
  <Container>
    {affiliates &&
      affiliates.map((aff, idx) => {
        return (
          <External key={idx} href={aff.link} title={aff.logo} target="_blank">
            <SVG name={aff.logo} />
          </External>
        );
      })}
  </Container>
);

export default Affiliates;
