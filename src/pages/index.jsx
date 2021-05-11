import styled from "@emotion/styled";
import { AnimatedIntro, PostList } from "components";
import { Sticky } from "components/Sticky";
import { motion } from "framer-motion";
import { graphql } from "gatsby";
import { Layout } from "layouts";
import PropTypes from "prop-types";
import React from "react";
import Pulse from "react-reveal";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import tw from "twin.macro";
import { ProjectsSlider } from "../components/ProjectsSlider";

const Container = styled.div`
  padding: 1vw 2vw 2vw 2vw;
  color: ${(props) =>
    props.dark ? props.theme.colors.white.base : props.theme.colors.black.base};
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0rem 1.25rem 1rem 1.25rem;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 2vw 1rem;
  }
`;

const Section = styled.div`
  background: ${(props) =>
    props.dark
      ? props.theme.gradient.rightToLeft
      : props.theme.colors.white.base};
`;
const SectionTitle = styled.p`
  font-weight: 900;
  color: ${(props) =>
    props.dark ? props.theme.colors.white.base : props.theme.colors.black.base};
  font-size: calc(0.4vw + 30px);
  margin: calc(0.5vw + 10px) calc(1.5vw + 10px);
  text-align: ${(props) => (props.center ? "center" : "left")};
  padding-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 0.5rem 1.25rem;
  }
`;

const container = {
  hidden: { opacity: 1, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Index = ({ data }) => {
  const posts = data.posts.edges;
  const projects = data.projects.edges;
  const experiences = data.experiences.node;
  // console.log(posts);
  return (
    <Layout>
      <Section>
        <AnimatedIntro />
        <SectionTitle>Projects</SectionTitle>
        <Pulse duration={1100}>
          <ProjectsSlider projects={projects} />
        </Pulse>
      </Section>
      <Section dark>
        <SectionTitle dark>My Experiences</SectionTitle>
        <Sticky data={experiences} />
      </Section>
      <Section>
        <SectionTitle>Featured Posts</SectionTitle>
        <motion.div variants={container} initial="hidden" animate="visible">
          <PostWrapper>
            {posts.map(({ node }, idx) => {
              const { id, excerpt, frontmatter } = node;
              const { cover, path, title, date, white } = frontmatter;
              return (
                <PostList
                  key={id}
                  idx={idx}
                  cover={cover.childImageSharp.gatsbyImageData}
                  path={path}
                  title={title}
                  date={date}
                  white={white || false}
                  excerpt={excerpt}
                />
              );
            })}
          </PostWrapper>
        </motion.div>
      </Section>
      <Section dark>
        <SectionTitle dark>About Me</SectionTitle>
        <Container dark>
          <p tw="text-sm sm:text-lg">
            • Universitas Indonesia, Sophomore
            <br />• Lead Software Engineer at COMPFEST
          </p>
        </Container>
      </Section>
      <Section>
        <SectionTitle center={true} css={tw`text-base sm:text-lg`}>
          {/* <i>
            To test in hope of a result... <br />
            is an action to be praised.
            <br />
            We only covet that which has value
          </i> */}
          <blockquote>
            Take it as a challenge, push your limits, you have come miles away,
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
            <br /> I hope this helps! Best of Luck! - Anon
          </blockquote>
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
        src {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
            # fluid(quality: 100) {
            #   ...GatsbyImageSharpFluid
            # }
          }
        }
        startDate
        endDate
        highlights
        background {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
            # fluid(quality: 100) {
            #   ...GatsbyImageSharpFluid
            # }
          }
        }
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
            white
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
                # fluid(
                #   maxWidth: 1000
                #   quality: 90
                #   traceSVG: { color: "#2B2B2F" }
                # ) {
                #   ...GatsbyImageSharpFluid_withWebp_tracedSVG
                # }
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
                gatsbyImageData(placeholder: BLURRED)
                # fluid(
                #   maxWidth: 1000
                #   quality: 90
                # ) {
                #   ...GatsbyImageSharpFluid_withWebp_tracedSVG
                # }
              }
            }
          }
        }
      }
    }
  }
`;
