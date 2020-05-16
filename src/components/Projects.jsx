import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { BlogList } from 'components';
import { Layout } from 'layouts';
import styled from '@emotion/styled';

const Projects = ({ projects }) => {
  // const { edges } = data.allMarkdownRemark;
  // console.log(projects);
  // projects.map(p => {
  //   console.log(p);
  // })
  return (
    <Layout>
      {/* <Helmet title={"Jonathan's projects"} />
      {edges.map(({ node }) => (
        <BlogList
          key={node.id}
          cover={node.frontmatter.cover.childImageSharp.fluid}
          path={node.frontmatter.path}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tags={node.frontmatter.tags}
          excerpt={node.excerpt}
        />
      ))} */}
    </Layout>
  );
};

export default Projects;
