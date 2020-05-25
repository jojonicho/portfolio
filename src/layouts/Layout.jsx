import 'typeface-open-sans';
import 'typeface-josefin-sans';

import React from 'react';
import { ThemeProvider, css, Global } from '@emotion/react';
import PropTypes from 'prop-types';
import { SEO } from 'components';
import { NavBar, Footer } from 'layouts';
import theme from '../../config/theme';
import headroom from '../styles/headroom';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <link rel="preload" />
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          text-rendering: optimizeLegibility;
          overflow-x: hidden;
          -ms-overflow-style: scrollbar;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        #gatsby-focus-wrapper {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        body {
          display: flex;
          flex-direction: column;
        }
        a {
          color: ${theme.colors.primary.dark};
          transition: color 0.5s;
          text-decoration: none;
        }
        a:hover {
          text-decoration: none;
          color: ${theme.colors.linkHover};
        }
        h1 {
          font-family: ${theme.fontFamily.heading};
        }
        ${headroom}
      `}
    />
    <SEO />
    <NavBar />
    {children}
    <Footer />
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
