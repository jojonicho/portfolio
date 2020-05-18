import React from 'react';
import { graphql } from 'gatsby';

import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';

const Tags = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const tagDict = {};
  edges.forEach(edge => {
    edge.node.frontmatter.tags.forEach(tag => {
      tagDict[tag] = '';
    });
  });
  const tags = Object.keys(tagDict);

  return (
    <Layout>
      <Header title="Tags Page" />
      <Container>
        <TagsBlock list={tags.sort()} />
      </Container>
    </Layout>
  );
};

export default Tags;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
