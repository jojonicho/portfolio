import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
// import PropTypes from 'prop-types';
// import Img from 'gatsby-image';
import SVG from '../components/SVG';

const Container = styled.div`
  margin: 0.35rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: calc(0.5vw + 0.1rem);
  justify-content: center;
  align-items: center;
  a {
    margin: 0.4vw calc(0.1rem + 0.5vw);
    color: ${props => props.theme.colors.black.blue};
    border-radius: 10px;
    &:hover {
      color: ${props => props.theme.colors.white.light};
      border: ${props => props.theme.colors.primary.light};
    }
  }
  svg {
    transition: all 300ms ease-in-out;
    fill: white;
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    &:hover {
      fill: ${props => props.theme.colors.secondary.base};
    }
  }
`;
const affiliates = [
  {
    logo: 'Linkedin',
    link: 'https://www.linkedin.com/in/joni',
  },
  {
    logo: 'Github',
    link: 'https://www.github.com/jojonicho',
  },
  {
    logo: 'Instagram',
    link: 'https://www.instagram.com/jojo_nicho',
  },
];

const External = styled.a`
  padding: 0px;
  width: calc(0.5vw + 28px);
  margin: 0px;
`;

const Affiliates = () => (
  <Container>
    {affiliates &&
      affiliates.map(aff => {
        return (
          <External href={aff.link}>
            <SVG name={aff.logo} />
          </External>
        );
      })}
  </Container>
);

export default Affiliates;
