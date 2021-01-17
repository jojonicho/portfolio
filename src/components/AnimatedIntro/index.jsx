import styled from "@emotion/styled";
import { Affiliates, SVG } from "components";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { SplitText } from "./SplitText";

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
  padding-top: 1vw;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    height: 400px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    height: 330px;
    padding: 55px 3vw 0px 3vw;
  }
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white.light};
  font-size: calc(1.2vw + 30px);
`;

const SubTitle = styled.text`
  padding-top: 0;
  color: ${(props) => props.theme.colors.white.light};
  font-size: calc(0.5vw + 20px);
  font-weight: 100;
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
      <InView as="div" threshold={0.25}>
        {({ inView, ref }) => {
          return (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={ref}
              >
                <SplitText
                  initial={{ y: "100%" }}
                  animate={inView ? "visible" : "exit"}
                  size="3xl"
                  variants={textVariants}
                >
                  Hello, my name is Jonathan!
                </SplitText>
              </motion.div>
            </AnimatePresence>
          );
        }}
      </InView>
      <AnimatePresence>
        <motion.div
          animate={{
            scale: [1, 2, 1, 1, 1],
            rotate: count % 2 ? [0, 360] : [360, 0],
          }}
          transition={{ duration: 2 }}
        >
          <SVGContainer>
            <SVG name={svgName} />
          </SVGContainer>
        </motion.div>
      </AnimatePresence>
      <SubTitle>
        I Love to <strong>Code</strong> and <strong>Learn</strong>
      </SubTitle>
      <Affiliates />
    </Header>
  );
};

export default AnimatedIntro;
