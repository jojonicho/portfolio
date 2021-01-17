import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import { GradientH1 } from "./GradientH1";

const textSize = (size) =>
  ({
    sm: tw`text-sm`,
    md: tw`text-base`,
    lg: tw`text-lg`,
    xl: tw`text-xl`,
    "2xl": tw`text-2xl`,
    "3xl": tw`text-3xl`,
    "4xl": tw`text-4xl`,
    "5xl": tw`text-5xl`,
  }[size]);

export const SplitText = ({ size, children, ...rest }) => {
  let words = children.split(" ");
  const n = words.length;
  return words.map((word, i) => {
    return (
      <div
        key={i}
        css={[
          tw`overflow-hidden leading-none`,
          i === n - 1 ? tw`flex justify-center items-center` : tw`inline mt-0`,
        ]}
      >
        <motion.div {...rest} css={[tw`inline-block`]} custom={i}>
          {i !== n - 1 ? (
            <h1 tw="text-xl leading-none">{`${word}\u00A0`}</h1>
          ) : (
            <GradientH1
              tw="font-black text-5xl inline-block"
              gr1="3498db"
              gr2="F1616D"
              gr3="FFFFFF"
            >
              {word}
            </GradientH1>
          )}
        </motion.div>
      </div>
    );
  });
};
