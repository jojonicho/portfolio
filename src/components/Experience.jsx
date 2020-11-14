import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 1vw;
  border-radius: ${(props) => props.theme.borderRadius.default};
  transition: ${(props) => props.theme.transitions.boom.transition};
  background: ${(props) => props.theme.colors.white.base};
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);
  box-shadow: ${(props) => props.theme.shadow.feature.smaller.default};
  height: 8rem;
  margin: 0 0.75rem 2rem 0.75rem;

  @media (max-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
    height: 7rem;
    margin: 0 0.35rem 2rem 0.35rem;
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 7rem;
    margin: 0 0 1rem 0;
  }

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.feature.smaller.hover};
    transform: scale(1.04);
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
    font-size: calc(0.6vw + 1rem);
    display: inline-block;
    color: ${(props) => props.theme.colors.black.base};
    transition: all ${(props) => props.theme.transitions.default.duration};
  }
  font-size: calc(0.2vw + 0.65rem);
  text-align: center;
`;

const Date = styled.div`
  color: ${(props) => props.theme.colors.black.lighter};
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
`;

const Img = styled.img`
  // width: 100%;
  // min-width: 200px;
  min-height: 40px;
  max-height: 100px;
`;

const Experience = ({ company, position, image, startDate, endDate }) => (
  <Wrapper>
    <Image>
      <Img src={image} />
    </Image>
    <Information>
      <Title>{position}</Title>
      <Date>
        {startDate} - {endDate}
      </Date>
    </Information>
  </Wrapper>
);

export default Experience;
