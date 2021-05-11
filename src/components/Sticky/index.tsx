import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import InView from "react-intersection-observer";
import tw from "twin.macro";
import { StickyDetail } from "./StickyDetail";

interface StickyProps {
  data: any;
}

const ImageContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 96vh;
  width: 40vw;
  position: sticky;
  top: 2vh;
  img {
    border-radius: 4px;
  }
`;

const variants = {
  initial: { opacity: 0, transition: { duration: 0.5 } },
  exit: {
    opacity: 0,
  },
};

export const Sticky: React.FC<StickyProps> = ({ data }) => {
  const [stickyIndex, setStickyIndex] = useState(0);
  const [image, setImage] = useState(
    data[stickyIndex].src.childImageSharp.gatsbyImageData
  );

  useEffect(() => {
    setImage(data[stickyIndex].src.childImageSharp.gatsbyImageData);
  }, [stickyIndex, setStickyIndex]);

  return (
    <InView as="div" threshold={0.15}>
      {({ inView, ref }) => {
        return (
          <div ref={ref} css={[tw`flex flex-row my-5`]}>
            <div tw="w-screen lg:w-screen-60">
              {data.map((coreValue, idx) => (
                <StickyDetail
                  key={idx}
                  index={idx}
                  data={coreValue}
                  setCoreValueIndex={setStickyIndex}
                />
              ))}
            </div>
            <motion.div tw="p-5 hidden lg:flex">
              <ImageContainer tw="lg:flex justify-center bg-white">
                <div tw="flex ">
                  {image && (
                    <AnimatePresence>
                      <motion.div
                        variants={variants}
                        initial="initial"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.6,
                        }}
                        animate={
                          inView
                            ? {
                                opacity: [0, 1],
                                scale:
                                  stickyIndex % 2 ? [1.35, 1.3] : [1.3, 1.35],
                              }
                            : "exit"
                        }
                      >
                        <div tw="flex flex-col justify-center items-center lg:w-full lg:h-full">
                          <GatsbyImage
                            tw="max-h-14 w-full"
                            image={image}
                            imgStyle={{ objectFit: "contain" }}
                            alt={data[stickyIndex].company}
                          />
                          <h1 tw="text-transparent">
                            {data[stickyIndex].startDate} -{" "}
                            {data[stickyIndex].endDate}
                          </h1>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </ImageContainer>
            </motion.div>
          </div>
        );
      }}
    </InView>
  );
};
