import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { PostList, BlogList, AnimatedIntro, SEO } from "components";
import { Layout } from "layouts";
import Pulse from "react-reveal";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Experience from "../components/Experience";
import pic from "../../static/posts/2020-07-05/freshmen.png";

const Container = styled.div`
  padding: 1vw 2vw 2vw 2vw;
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0.5rem 2rem 2rem;
    font-size: 0.8rem;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 4rem 1rem 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 2vw 1rem;
  }
`;

const Section = styled.div``;
const SectionTitle = styled.div`
  color: ${(props) => props.theme.colors.black.base};
  font-size: calc(0.8vw + 20px);
  font-weight: 300;
  margin: calc(0.5vw + 10px) calc(1.5vw + 10px);
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

const CarouselContainer = styled.div`
  margin-bottom: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    margin-bottom: 50px;
  }
`;

const Index = ({ data }) => {
  const posts = data.posts.edges;
  const projects = data.projects.edges;
  const experiences = data.experiences.node;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    swipeToSlide: true,
  };
  return (
    <Layout>
      <Fade duration={1300}>
        <Section>
          <AnimatedIntro />
          <SectionTitle>Projects</SectionTitle>
          <Pulse duration={1100}>
            <CarouselContainer>
              <Slider {...settings}>
                {projects.map(({ node }) => (
                  <BlogList
                    key={node.id}
                    cover={node.frontmatter.cover.childImageSharp.fluid}
                    path={node.frontmatter.path}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    tags={node.frontmatter.tags}
                    excerpt={node.excerpt}
                  />
                ))}
              </Slider>
            </CarouselContainer>
          </Pulse>
        </Section>
      </Fade>
      <Fade duration={900}>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <PostWrapper>
            {experiences.map(
              ({ company, position, startDate, endDate, image }) => {
                return (
                  <Experience
                    company={company}
                    position={position}
                    image={image}
                    startDate={startDate}
                    endDate={endDate}
                  />
                );
              }
            )}
          </PostWrapper>
        </Section>
      </Fade>
      <Fade duration={900}>
        <Section>
          <SectionTitle>Featured Posts</SectionTitle>
          <PostWrapper>
            {posts.map(({ node }) => {
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
      </Fade>
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <Container>
          Software Engineer Intern at OY! Indonesia
          <br />
          Universitas Indonesia, Sophomore
          <br />
          Current GPA: 3.92/4.00
          <br />
          Member of BEM, COMPFEST, RISTEK, KMK
          <br />
          Sea Undergraduate Scholarship 2019 Awardee
          <br />
          Third Winner of Datavidia 2020
          <br />
          Third Winner of JOINTS Data Mining 2020
          <br />
          Huge fan of Mrs. GREEN APPLE and Aimer
        </Container>
      </Section>
      <Section>
        <SectionTitle center={true}>
          <i>
            To test in hope of a result... <br />
            is an action to be praised.
            <br />
            We only covet that which has value
          </i>
          {/* <i>
            "Take it as a challenge, push your limits, you have come miles away,
            it is just few meters now.
            <br />
            <br /> It is never easy to achieve anything. If you have achieved
            anything easily, don't count it as your achievements. You may find a
            lot of problems, face them, resolve them.
            <br />
            <br />
            If they are not serious, you be the one. <br />
            If they are not motivating, you be the one.
            <br /> If they are not helpful, you help yourself.
            <br />
            <br /> I know it is very easy to say. Give your best and if things
            still do not work, you always have the option to leave it. But then,
            you won't regret that you didn't try.
            <br />
            <br /> I hope this helps! Best of Luck!"
          </i> */}
        </SectionTitle>
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
    experiences: experiencesJson {
      node {
        company
        position
        image
        startDate
        endDate
      }
    }
    posts: allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: { regex: "/(posts)/" }
        frontmatter: { featured: { eq: true } }
      }
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
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: { regex: "/(projects)/" }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
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
