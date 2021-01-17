import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import Img from "gatsby-image";
import React, { useEffect, useState } from "react";
import InView from "react-intersection-observer";
import tw from "twin.macro";

import { StickyDetail } from "./StickyDetail";

interface StickyProps {
  data: any;
}

const variants = {
  initial: { opacity: 0, transition: { duration: 0.5 } },
  exit: {
    opacity: 0,
  },
};

type BgImageProp = {
  bgImage?: any;
};

export const BgContainer = styled.div<BgImageProp>`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImageContainer = styled.div<BgImageProp>`
  background-image: url(${(props) => props.bgImage});
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

export const Sticky: React.FC<StickyProps> = ({ data }) => {
  const [stickyIndex, setStickyIndex] = useState(0);
  const [image, setImage] = useState(
    data[stickyIndex].src.childImageSharp.fluid
  );
  const [highlights, setHighlights] = useState(data[stickyIndex].highlights);
  const [bgImage, setBgImage] = useState(
    data[stickyIndex].background.childImageSharp.fluid.src
  );

  useEffect(() => {
    setBgImage(data[stickyIndex].background.childImageSharp.fluid.src);
  }, [stickyIndex, setStickyIndex]);

  useEffect(() => {
    setImage(data[stickyIndex].src.childImageSharp.fluid);
    setHighlights(data[stickyIndex].highlights);
  }, [stickyIndex, setStickyIndex]);
  return (
    <InView as="div" threshold={0.25}>
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
            <div tw="p-5 hidden lg:flex">
              <ImageContainer bgImage={bgImage} tw="lg:flex justify-center">
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
                            ? { opacity: [0, 1], scale: [1.3, 1.35] }
                            : "exit"
                        }
                      >
                        <BgContainer tw="flex flex-col justify-center items-center lg:w-full lg:h-full">
                          <div tw="w-full">
                            <Img fluid={image} />
                            <h1 tw="text-transparent">
                              {data[stickyIndex].startDate} -{" "}
                              {data[stickyIndex].endDate}
                            </h1>
                          </div>
                        </BgContainer>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </ImageContainer>
            </div>
          </div>
        );
      }}
    </InView>
  );
};
