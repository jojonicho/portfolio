import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import "./src/styles/typography.css";

export const wrapRootElement = ({ element }) => (
  <AnimateSharedLayout type="crossfade">{element}</AnimateSharedLayout>
);
