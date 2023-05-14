import styled from "@emotion/styled";
import { Affiliates } from "components";
import React from "react";
import tw from "twin.macro";

const Header = styled.div`
  background: ${(props) => props.theme.gradient.rightToLeft};
  padding-top: 30px;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 55px 0px 0px 0px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 55px 3vw 0px 3vw;
  }
  font-weight: bold;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //text-align: center;
  //align-items: center;
  color: ${(props) => props.theme.colors.white.light};
  font-size: calc(1.2vw + 30px);
  a {
    color: ${(props) => props.theme.colors.white.light};
    text-decoration: underline;
  }
`;

const Section = styled.div`
  background: ${(props) =>
    props.dark
      ? props.theme.gradient.rightToLeft
      : props.theme.colors.white.base};
  text-align: left;
`;

const SectionTitle = styled.p`
  font-weight: 900;
  color: ${(props) =>
    props.dark ? props.theme.colors.white.base : props.theme.colors.black.base};
  font-size: calc(0.4vw + 30px);
  margin: calc(0.5vw + 10px) calc(1.5vw + 10px);
  text-align: ${(props) => (props.center ? "center" : "left")};
  padding-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 0.5rem 1.25rem;
  }
`;

const Container = styled.div`
  padding: 1vw 2vw 2vw 2vw;
  color: ${(props) =>
    props.dark ? props.theme.colors.white.base : props.theme.colors.black.base};
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0rem 1.25rem 1rem 1.25rem;
  }
`;

const Row = styled.div`
  // evenly spaced row
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AnimatedIntro = () => {
  return (
    <Header>
      <Row>
        <Section dark>
          <SectionTitle dark>Jonathan Nicholas</SectionTitle>
          <Container dark>
            <p tw="text-sm sm:text-lg">
              • Top 15 Ranked Leetcode in Indonesia
              <br />
              • Computer Science Student at University of Indonesia
              <br />
              • Ex-Software Engineer Intern at Traveloka, Ruangguru, Dekoruma
              <br />• Looking for full-time Software Engineer opportunities!
              <br /> Reach me through jojonichoo@gmail.com or{" "}
              <a target="_blank" href="https://www.linkedin.com/in/joni/">
                LinkedIn
              </a>
            </p>
          </Container>
        </Section>
      </Row>
      <Affiliates />
    </Header>
  );
};

export default AnimatedIntro;
