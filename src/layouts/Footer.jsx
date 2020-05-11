import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  padding: calc(0.5vw + 15px);
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const CustomLink = styled.a`
color: white;
font-weight: bold;
`

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Created by{' '}
        <CustomLink href="https://www.jojonicho.wtf">@jojonicho</CustomLink>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
