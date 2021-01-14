import { motion } from "framer-motion";
import Img from "gatsby-image";
import React from "react";
import InView from "react-intersection-observer";
import "twin.macro";
import { BgContainer } from ".";

interface StickyDetailProps {
  data: any;
  index: number;
  setCoreValueIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const StickyDetail: React.FC<StickyDetailProps> = ({
  data,
  index,
  setCoreValueIndex,
}) => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: -1000, opacity: 0 }}
    >
      <InView
        as="div"
        threshold={0.8}
        onChange={(inView) => {
          if (inView) {
            setCoreValueIndex(index);
          }
        }}
      >
        <BgContainer bgImage={data.background.childImageSharp.fluid.src}>
          <div tw="lg:hidden py-10 px-20">
            <Img fluid={data.src.childImageSharp.fluid} />
          </div>
        </BgContainer>
        <div tw="flex flex-col lg:h-screen justify-center mt-5 p-6 text-white">
          <p tw="font-black text-2xl">{data.company}</p>
          <p tw="font-black text-xl">{data.position}</p>
          <p>
            {data.startDate} - {data.endDate}
          </p>
          {data.highlights.map((highlight, idx) => (
            <p key={idx} tw="text-base sm:text-lg mt-5">
              • {highlight}
            </p>
          ))}
        </div>
      </InView>
    </motion.div>
  );
};
