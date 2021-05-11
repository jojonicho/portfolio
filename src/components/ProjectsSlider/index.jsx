import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import BlogList from "../BlogList";
import tw from "twin.macro";

const Container = styled.div`
  backdrop-filter: blur(5px);
`;

const arrowStyle = tw`hover:bg-gray-100 p-0 sm:p-5 hidden sm:flex justify-center items-center cursor-pointer z-10`;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Container css={arrowStyle} onClick={onClick}>
      <svg
        tw="w-6 h-6 text-black-40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        ></path>
      </svg>
    </Container>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Container css={arrowStyle} onClick={onClick}>
      <svg
        tw="w-6 h-6 text-black-40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        ></path>
      </svg>
    </Container>
  );
}
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  touchThreshold: 15,
  // fade: true,
};
const CarouselContainer = styled.div`
  overflow-x: hidden;
  padding-bottom: 3rem;
`;

export const ProjectsSlider = ({ projects }) => {
  return (
    <CarouselContainer>
      <Slider {...settings} tw="flex">
        {projects.map(({ node }) => (
          <BlogList
            magic={false}
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.gatsbyImageData}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
          />
        ))}
      </Slider>
    </CarouselContainer>
  );
};
