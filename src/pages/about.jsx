import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Header } from "components";
import { Layout } from "layouts";

const About = () => (
  <Layout>
    <Helmet title={"About Jojonicho"} />
    <Header title="whoami">
      Computer Science Sophomore at Universitas Indonesia
    </Header>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
