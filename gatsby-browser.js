import { AnimateSharedLayout } from "framer-motion";
import React from "react";

export const wrapRootElement = ({ element }) => (
  <AnimateSharedLayout type="crossfade">{element}</AnimateSharedLayout>
);
