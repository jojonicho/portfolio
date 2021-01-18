import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { SEO } from "components";
import { AnimatePresence } from "framer-motion";
import { Footer, NavBar } from "layouts";
import PropTypes from "prop-types";
import React from "react";
import { css } from "twin.macro";
import "typeface-josefin-sans";
import "typeface-open-sans";
import theme from "../../config/theme";
import headroom from "../styles/headroom";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

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
          width: 100vw;
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
          widht: 100vw;
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
        p {
          margin: 0;
        }
        ${headroom}
      `}
    />
    <SEO />
    <Center>
      <NavBar />
      <AnimatePresence>{children}</AnimatePresence>
      <Footer />
    </Center>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
