// import React from 'react';
// import { ThemeProvider } from 'emotion-theming';
// import Theme from './config/theme';
// import { css, Global } from '@emotion/core';
// import headroom from './src/styles/headroom';

// export const wrapRootElement = ({ element }) => (
//   <Themeprovider theme={Theme}>
//     <Global
//       styles={css`
//         *,
//         *:before,
//         *:after {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }
//         html {
//           text-rendering: optimizeLegibility;
//           overflow-x: hidden;
//           -ms-overflow-style: scrollbar;
//           -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }
//         #gatsby-focus-wrapper {
//           width: 100vw;
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//         }
//         body {
//           display: flex;
//           flex-direction: column;
//         }
//         a {
//           color: ${theme.colors.link};
//           transition: color 0.5s;
//           text-decoration: none;
//         }
//         a:hover {
//           text-decoration: none;
//           color: ${theme.colors.linkHover};
//         }
//         h1 {
//           font-family: ${theme.fontFamily.heading};
//         }
//         ${headroom}
//       `}
//     />
//     {element}
//   </Themeprovider>
// );
