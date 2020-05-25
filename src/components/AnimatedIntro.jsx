import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Affiliates, SVG } from 'components';

import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';
import styled from '@emotion/styled';
import { useSpring, animated, useTransition } from 'react-spring';

const TransitionItems = styled(animated.div)`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 2vw);
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 80px;
  word-wrap: break-word;
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: calc(5vw + 40px);
  height: calc(5vw + 40px);
  margin-top: 0.25rem;
`;

const Header = styled.div`
  background: ${props => props.theme.gradient.rightToLeft};
  padding-top: 1vw;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 400px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 330px;
    padding: 55px 3vw 0px 3vw;
  }
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  // min-height: 200px;
  color: ${props => props.theme.colors.white.light};
  font-size: calc(1.2vw + 30px);
`;

const SubTitle = styled.text`
  color: ${props => props.theme.colors.white.light};
  font-size: calc(0.5vw + 20px);
  font-weight: 100;
`;

const AnimatedIntro = () => {
  const mylist = ['React', 'Gatsby', 'Flutter', 'GraphQL'];
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count >= mylist.length - 1 ? 0 : count + 1);
    }, 2600);
  }, [count]);

  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    //'#28b4d7'
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#3498db',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#F1616D' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['Jonathan', 'Nicholas']), 500));
    ref.current.push(
      setTimeout(() => set(['Jonathan', 'Developer', 'Nicholas']), 2000)
    );
    ref.current.push(setTimeout(() => set(['Jonathan', 'Nicholas']), 3000));
    ref.current.push(
      setTimeout(() => set(['Jonathan', 'Data', 'Nicholas']), 5500)
    );
    ref.current.push(setTimeout(() => set(['Jonathan', 'Nicholas']), 6500));
  }, []);

  useEffect(() => void reset(), []);
  return (
    <Header>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <TransitionItems key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
            {item}
          </animated.div>
        </TransitionItems>
      ))}
      <Greeting>
        <Rotate spy={count}>
          <Pulse spy={count} duration={1800}>
            <SVG name={mylist[count]} />
          </Pulse>
        </Rotate>
      </Greeting>
      <SubTitle>Computer Science Freshman @ UI</SubTitle>
      <Affiliates />
    </Header>
  );
};

export default AnimatedIntro;
