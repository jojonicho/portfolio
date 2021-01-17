import React from "react";
import styled from "@emotion/styled";
import { GradientP } from "../components/AnimatedIntro/GradientP";
import "twin.macro";

const Wrapper = styled.footer`
  padding: calc(0.3vw + 7px);
  background: ${(props) => props.theme.gradient.rightToLeft};
  font-family: ${(props) => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  text-align: center;
  color: ${(props) => props.theme.colors.white.light};
`;

const CustomLink = styled.a`
  // color: ${(props) => props.theme.colors.secondary.base};
  font-weight: bold;
`;

const Footer = () => (
  <Wrapper tw="flex justify-center">
    <CustomLink href="https://www.github.com/jojonicho">
      <GradientP
        tw="font-black text-2xl"
        gr1="3498db"
        gr2="F1616D"
        gr3="FFFFFF"
      >
        @jojonicho
      </GradientP>
    </CustomLink>
  </Wrapper>
);
export default Footer;
