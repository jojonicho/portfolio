import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { SEO } from "components";
import { AnimatePresence } from "framer-motion";
import { Footer, NavBar } from "layouts";
import PropTypes from "prop-types";
import React from "react";
import { css } from "twin.macro";
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
          text-decoration: underline;
          color: ${theme.colors.linkHover};
        }
        a:focus {
          text-decoration: underline;
          color: ${theme.colors.linkHover};
        }

        h1 {
          font-family: ${theme.fontFamily.heading};
        }
        p {
          margin: 0;
        }

        blockquote:before {
          color: #ccc;
          content: open-quote;
          font-size: 4em;
          line-height: 0.1em;
          margin-right: 0.25em;
          vertical-align: -0.4em;
        }

        blockquote {
          border-radius: 5px;
          background-color: ${theme.colors.white.light};
          border-left: 10px solid #ccc;
          padding: 0.5em 10px;
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
