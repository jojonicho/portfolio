import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { PostList } from 'components';
import { Layout } from 'layouts';
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';
import SVG from '../components/SVG';
import Affiliates from '../components/Affiliates';
import Blog from '../pages/blog';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 4rem 1rem 4rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    // margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin: 2vw 1rem;
  }
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: calc(5vw + 40px);
  height: calc(5vw + 40px);
`;

const SubTitle = styled.text`
  color: ${props => props.theme.colors.white.light};
  font-size: calc(0.5vw + 20px);
  font-weight: 100;
`;

const Header = styled.div`
  background: ${props => props.theme.gradient.rightToLeft};
  // height: 450px;
  padding-top: 1vw;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 400px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 355px;
    padding: 55px 3vw 0px 3vw;
  }
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  // min-height: 200px;
  color: ${props => props.theme.colors.white.light};
  font-size: calc(1.2vw + 30px);
`;
const Section = styled.div``;
const SectionTitle = styled.div`
  color: ${props => props.theme.colors.black.base};
  font-size: calc(0.8vw + 20px);
  font-weight: 300;
  margin: calc(0.5vw + 10px) calc(1.5vw + 10px);
`;

const Index = ({ data }) => {
  const mylist = ['React', 'Gatsby', 'Flutter', 'GraphQL'];
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count >= mylist.length - 1 ? 0 : count + 1);
    }, 2600);
  }, [count]);
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={`Jonathan Nicholas' Personal Website`} />
      <Header>
        Jonathan Nicholas
        <Greeting>
          <Rotate spy={count}>
            <Pulse spy={count} duration={1800}>
              <SVG name={mylist[count]} />
            </Pulse>
          </Rotate>
        </Greeting>
        <SubTitle>Computer Science Freshman @ UI</SubTitle>
        <Affiliates />
      </Header>
      <Section>
        <SectionTitle>Projects</SectionTitle>
        {/* <Blog /> */}
      </Section>
      <Section>
        <SectionTitle>Featured Posts</SectionTitle>
        <PostWrapper>
          {edges.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const { cover, path, title, date } = frontmatter;
            return (
              <PostList
                key={id}
                cover={cover.childImageSharp.fluid}
                path={path}
                title={title}
                date={date}
                excerpt={excerpt}
              />
            );
          })}
        </PostWrapper>
      </Section>
      <Section>
        <SectionTitle>About Me</SectionTitle>
      </Section>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {featured: {eq: true}}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
