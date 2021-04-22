import { RadioGroup } from "@headlessui/react";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import React, { useState } from "react";
import InView from "react-intersection-observer";
import "twin.macro";
import tw from "twin.macro";

interface StickyDetailProps {
  data: any;
  index: number;
  setCoreValueIndex: React.Dispatch<React.SetStateAction<number>>;
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#51689a" opacity="0.4" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Bullets(plans) {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div tw="w-full px-4 py-16">
      <div tw="w-full max-w-xl mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label tw="sr-only">Server size</RadioGroup.Label>
          <div tw="space-y-2">
            {plans.map((plan, idx) => (
              <RadioGroup.Option
                key={idx}
                value={plan}
                css={[
                  tw`relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`,
                ]}
              >
                {({ checked }) => (
                  <>
                    <div tw="flex items-center justify-between w-full transform transition duration-100 ease-in-out motion-safe:hover:scale-105">
                      <div tw="flex items-center">
                        <div tw="text-base">
                          <RadioGroup.Label
                            as="p"
                            css={[
                              tw`font-medium`,
                              tw`text-white`,
                              checked && tw`font-bold`,
                            ]}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            css={[
                              tw`inline`,
                              tw`text-white`,
                              checked && tw`font-bold`,
                            ]}
                          >
                            <span>{plan}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div tw="flex-shrink-0">
                          <CheckIcon tw="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
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
        <div tw="lg:hidden py-10 px-20 bg-white">
          <Img fluid={data.src.childImageSharp.fluid} />
        </div>
        <div tw="flex flex-col lg:h-screen justify-center p-4 sm:p-6 text-white">
          <p tw="font-black text-2xl sm:text-4xl">{data.company}</p>
          <p tw="font-black text-xl sm:text-2xl">{data.position}</p>
          <p tw="italic sm:text-lg">
            {data.startDate} - {data.endDate}
          </p>
          {Bullets(data.highlights)}
        </div>
      </InView>
    </motion.div>
  );
};
