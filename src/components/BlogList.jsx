import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { TagsBlock } from "components";
import { Container } from "layouts";

const Wrapper = styled.article`
  margin: 0 2vw;
`;

const Image = styled.div`
  box-shadow: ${(props) => props.theme.shadow.feature.small.default};
  transition: ${(props) => props.theme.transitions.boom.transition};
  border-radius: ${(props) => props.theme.borderRadius.default};
  img {
    border-radius: ${(props) => props.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: ${(props) => props.theme.shadow.feature.small.hover};
    transform: scale(1.03);
  }
  a {
    border-radius: ${(props) => props.theme.borderRadius.default};
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px ${(props) => props.theme.colors.secondary.base};
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    min-height: 150px;
  }
`;

// const StyledLink = styled(Link)`
const StyledImg = styled(Img)`
  height: 200px;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    height: 150px;
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
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const Date = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.black.lighter};
`;

const Title = styled.h1`
  margin: 0;
`;

const BlogList = ({ path, cover, title, date, excerpt, tags }) => (
  <Container>
    <Wrapper>
      <Image>
        <Link to={path} title={title}>
          <StyledImg fluid={cover} />
        </Link>
      </Image>
      <Information>
        <Date>{date}</Date>
        <Link to={path}>
          <Title>{title}</Title>
        </Link>
        <TagsBlock list={tags} />
        {excerpt}
      </Information>
    </Wrapper>
  </Container>
);

export default BlogList;

BlogList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
