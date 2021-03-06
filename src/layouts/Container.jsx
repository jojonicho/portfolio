import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Wrapper = styled.section`
  text-align: ${(props) => (props.center ? "center" : "")};
  margin: auto;
  padding: 2rem 1.5rem 1rem 1.5rem;
  width: 50%;
  max-width: ${(props) => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 90%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 100%;
    padding: 0.7rem 0.7rem;
    // padding: 0.7rem;
  }
`;

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
