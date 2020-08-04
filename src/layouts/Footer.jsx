import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.footer`
  padding: calc(0.3vw + 7px);
  // box-shadow: ${(props) => props.theme.shadow.footer};
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
  color: ${(props) => props.theme.colors.secondary.base};
  font-weight: bold;
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        With ❤️ by{" "}
        <CustomLink href="https://www.github.com/jojonicho">
          @jojonicho
        </CustomLink>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
