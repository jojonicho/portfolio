import styled from "@emotion/styled";
import { Affiliates, SVG } from "components";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { SplitText } from "./SplitText";
import tw from "twin.macro";

const SVGContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(4vw + 40px);
  height: calc(4vw + 40px);
`;

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

const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
  padding: 0px 30px;
`;

const textVariants = {
  exit: { opacity: 0 },
  visible: (i) => ({
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const AnimatedIntro = () => {
  const mylist = ["React", "Gatsby", "Flutter", "GraphQL"];
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count >= mylist.length - 1 ? 0 : count + 1);
    }, 2600);
  }, [count]);

  const svgName = mylist[count];
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
              <br />• Looking for{" "}
              <b>full-time Software Engineer opportunities</b>!
            </p>
          </Container>
        </Section>
      </Row>
      <Affiliates />
    </Header>
  );
};

export default AnimatedIntro;
