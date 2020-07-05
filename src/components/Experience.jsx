import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { TagsBlock } from "components";
import { Container } from "layouts";

const Wrapper = styled.article`
  margin-bottom: 2rem;
  position: relative;
  z-index: 100;
  border-radius: ${(props) => props.theme.borderRadius.default};
  box-shadow: ${(props) => props.theme.shadow.feature.small.default};
  transition: ${(props) => props.theme.transitions.boom.transition};
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);
  &:hover {
    box-shadow: ${(props) => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }

  @media (max-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: ${(props) => props.theme.transitions.boom.transition};
  border-radius: ${(props) => props.theme.borderRadius.default};
  img {
    margin: 0;
  }
  a {
    border-radius: ${(props) => props.theme.borderRadius.default};
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px ${(props) => props.theme.colors.secondary.base};
    }
  }
`;

const Information = styled.div`
  h1 {
    font-size: calc(1vw + 1rem);
    display: inline-block;
    color: ${(props) => props.theme.colors.black.base};
    transition: all ${(props) => props.theme.transitions.default.duration};
    &:hover {
      color: ${(props) => props.theme.colors.primary.base};
    }
  }
  font-size: calc(0.2vw + 0.65rem);
  text-align: center;
`;

const Date = styled.div`
  color: ${(props) => props.theme.colors.black.lighter};
`;

const Title = styled.h2`
  margin: 0;
`;

const Experience = ({ company, position, image, startDate, endDate }) => (
  <Wrapper>
    <Image>
      <img src={image} />
      <Title>{position}</Title>
      <Information>
        <Date>
          {startDate} - {endDate}
        </Date>
      </Information>
    </Image>
  </Wrapper>
);

export default Experience;
