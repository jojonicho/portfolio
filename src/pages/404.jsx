import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Layout, Container } from "layouts";
import styled from "@emotion/styled";
import logo from "../../static/logo/404.png";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: calc(1vw + 1rem);
  a {
    color: ${(props) => props.theme.colors.secondary.base};
    &:hover {
      color: ${(props) => props.theme.colors.primary.base};
    }
  }
`;

const ErrorPage = (center) => {
  return (
    <Layout>
      <Container center={center}>
        <Helmet title={"404"} />
        <ImageContainer>
          <img alt="404" src={logo} />
          <h2>Oh cool, a 404 page</h2>
          <h2>
            <Link to="/">Go Back</Link>
          </h2>
        </ImageContainer>
      </Container>
    </Layout>
  );
};

export default ErrorPage;

ErrorPage.propTypes = {
  center: PropTypes.object,
};
