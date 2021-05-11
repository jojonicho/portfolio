import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { DiscussionEmbed } from "disqus-react";

import { Layout, Container, Content } from "layouts";
import { TagsBlock, Header, SEO } from "components";
import "../styles/prism";

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: calc(0.4vw + 10px);
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 2vw 3vw 0 3vw;
    padding: 0px;
  }
  h3 {
    font-size: calc(0.4vw + 10px);
    color: ${(props) => props.theme.colors.black.base};
    transition: all ${(props) => props.theme.transitions.default.duration};
    &:hover {
      color: ${(props) => props.theme.colors.primary.base};
    }
  }
`;

const Post = ({ data, pageContext }) => {
  const { next, prev, pathSlug } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  const {
    date,
    title,
    tags,
    path,
    description,
    cover: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  } = frontmatter;
  const image = gatsbyImageData;
  const disqusConfig = {
    // shortname: process.env.GATSBY_DISQUS_NAME,
    shortname: "jojonicho",
    config: { identifier: path, title },
  };

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || " "}
        banner={publicURL}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image} path={pathSlug} />
      <Container>
        {path}
        <Content input={html} />
        <TagsBlock list={tags || []} />
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
      <Container>
        <DiscussionEmbed
          shortname={disqusConfig.shortname}
          config={disqusConfig.config}
        />
      </Container>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
    pathSlug: PropTypes.string,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        description
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              transformOptions: {
                duotone: {
                  highlight: "#284187"
                  shadow: "#284187"
                  opacity: 50
                }
              }
            )
            # fluid(
            #   background: "#2e3246"
            #   maxWidth: 1920
            #   quality: 90
            #   duotone: { highlight: "#2e3246", shadow: "#2e3246", opacity: 50 }
            # ) {
            #   ...GatsbyImageSharpFluid_withWebp_tracedSVG
            # }
            # resize(width: 1200, quality: 90) {
            #   src
            # }
          }
        }
      }
    }
  }
`;
