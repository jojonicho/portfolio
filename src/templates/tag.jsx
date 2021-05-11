import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Layout } from "layouts";
import { BlogList } from "components";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 3rem;
`;

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  return (
    <Layout>
      <Helmet title={`${tagName} | Jonathan Nicholas`} />
      <Container>
        {posts.map((post) => (
          <BlogList
            key={post.id}
            cover={post.frontmatter.cover.childImageSharp.gatsbyImageData}
            path={post.frontmatter.path}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            tags={post.frontmatter.tags}
            excerpt={post.excerpt}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string,
  }),
};
