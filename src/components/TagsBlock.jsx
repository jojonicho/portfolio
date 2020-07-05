import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const TagsContainer = styled.div`
  // margin: 0.3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: calc(0.2vw + 0.6rem);
  justify-content: center;
  align-items: center;
  a {
    margin: 0.5vw 0.6vw;
    color: ${(props) => props.theme.colors.black.blue};
    padding: 0.2rem 0.5rem;
    background: ${(props) => props.theme.colors.white.grey};
    border-radius: 5px;
    &:hover {
      color: ${(props) => props.theme.colors.white.base};
      background: ${(props) => props.theme.colors.secondary.base};
      border: ${(props) => props.theme.colors.primary.light};
    }
  }
`;

const TagsBlock = ({ list }) => (
  <Fade cascade bottom distance="10px" delay={100}>
    <TagsContainer>
      {list &&
        list.map((tag) => {
          const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
          return (
            <Link key={tag} to={`/tags/${tag.toLowerCase()}`}>
              <span>{upperTag}</span>
            </Link>
          );
        })}
    </TagsContainer>
  </Fade>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};
