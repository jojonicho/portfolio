import React from "react";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import tw from "twin.macro";

const Wrapper = styled.header`
  background: ${(props) => props.theme.gradient.rightToLeft};
  height: 400px;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    height: 400px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    height: 215px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${(props) => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${(props) => props.theme.layout.base};
  padding: 0 2vw;
  align-items: center;
  h1 {
    font-size: calc(0.9vw + 18px);
    margin: 2vw 0;
  }
  h3 {
    font-size: calc(0.9vw + 12px);
    margin-top: 0;
  }
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${(props) => props.theme.colors.white.light};
`;

const Header = ({ children, title, date, cover, path }) => (
  <motion.div
    transition={{ duration: 0.2, delay: 0.15 }}
    style={{ pointerEvents: "auto" }}
  >
    <Wrapper>
      <motion.div layoutId={`post-banner-${path}`}>
        <GatsbyImage image={cover || {} || [] || ""} alt={title} />
      </motion.div>
      <Text>
        <motion.h1 layoutId={`post-title-${path}`}>{title}</motion.h1>
        <h3>{date}</h3>
        {children && <Subtitle>{children}</Subtitle>}
      </Text>
    </Wrapper>
  </motion.div>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
