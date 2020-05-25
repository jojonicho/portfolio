import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = (center) => (
  <Layout>
    <Helmet title={'About Jojonicho'} />
    <Header title="whoami">
      Computer Science Freshman at Universitas Indonesia
    </Header>
    <Container center={center}>
      <h3>Computer Science Freshman </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
