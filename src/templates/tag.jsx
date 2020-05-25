import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { BlogList } from 'components';

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  console.log(posts);
  return (
    <Layout>
      <Helmet title={`${tagName} | Jojonicho`} />
      {posts.map((post, index) => (
        <BlogList
          key={post.id}
          cover={post.frontmatter.cover.childImageSharp.fluid}
          path={post.frontmatter.path}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          excerpt={post.excerpt}
        />
      ))}
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
