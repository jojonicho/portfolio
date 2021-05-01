import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import theme from "../../config/theme";
import { AnimatePresence, motion } from "framer-motion";
import InView from "react-intersection-observer";
import tw from "twin.macro";

const Wrapper = styled.article`
  position: relative;
  z-index: 100;
  border-radius: ${(props) => props.theme.borderRadius.default};
  transition: ${(props) => props.theme.transitions.boom.transition};
  height: 17rem;
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);

  &:hover {
    box-shadow: ${(props) =>
      props.white
        ? props.theme.shadow.feature.smaller.hover
        : props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }
  margin: 0 0.75rem 2rem 0.75rem;

  @media (max-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
    height: 18rem;
    margin: 0 0.35rem 2rem 0.35rem;
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 12rem;
    margin: 0 0 1rem 0;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
  border-radius: ${(props) => props.theme.borderRadius.default};
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(46, 50, 70, 0.1);
    z-index: -10;
    border-radius: ${theme.borderRadius.default};
    transition: opacity ${theme.transitions.default.duration};
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  border-radius: ${(props) => props.theme.borderRadius.default};
  img {
    border-radius: ${(props) => props.theme.borderRadius.default};
  }
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`;

const Info = styled.div`
  color: ${(props) => (props.white ? props.theme.colors.black.blue : "white")};
  margin: 0 1rem 1.25rem 1.25rem;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: calc(0.2vw + 11px);
`;

const Title = styled(motion.h2)`
  margin-bottom: 0.3rem;
  font-size: calc(0.2vw + 20px);
`;

const variants = {
  initial: {
    opacity: 0,
  },
  exit: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.1 * i,
    },
  }),
};

const PostList = ({ idx, cover, path, date, title, excerpt, white }) => (
  <InView as="div" threshold={0.3}>
    {({ inView, ref }) => {
      return (
        <AnimatePresence>
          <Wrapper white={white} ref={ref}>
            <motion.div
              custom={idx}
              variants={variants}
              initial="initial"
              animate={inView ? "visible" : "exit"}
            >
              <motion.div layoutId={`post-banner-${path}`}>
                <Image>
                  <Img fluid={cover} />
                </Image>
              </motion.div>
              <StyledLink to={path} white={white}>
                <Info white={white}>
                  <span css={[white && tw`bg-gray-100`, tw`p-2 rounded-t-lg`]}>
                    {new Date(date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Title
                    css={[white && tw`bg-gray-100`, tw`p-2 rounded-lg`]}
                    tw="sm:text-xl lg:text-2xl xl:text-3xl"
                    layoutId={`post-title-${path}`}
                  >
                    {title}
                  </Title>
                  {/* <span css={[white && tw`bg-gray-100`, tw`rounded-lg`]}>
                    {excerpt}
                  </span> */}
                </Info>
              </StyledLink>
            </motion.div>
          </Wrapper>
        </AnimatePresence>
      );
    }}
  </InView>
);

export default PostList;

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
