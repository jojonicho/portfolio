import { css } from "twin.macro";
import theme from "../../config/theme";

const headroom = css`
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
    top: 0;
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 1.5rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.white.base};
      }
    }
    nav {
      a {
        color: ${theme.colors.secondary.base};
        &:hover {
          border-color: ${theme.colors.black.blue};
          color: ${theme.colors.primary.base};
        }
      }
    }
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--scrolled {
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
  }

  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    box-shadow: 0 1px 10px rgba(46, 50, 70, 0.2);
    nav {
      a {
        // color: ${theme.colors.primary.base};
        color: ${theme.colors.background.dark};
        &:hover {
          border-color: ${theme.colors.black.blue};
          color: ${theme.colors.primary.base};
        }
        &:focus {
          color: ${theme.colors.background.ddark};
        }
      }
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.black.base};
      }
    }
    span {
      color: ${theme.colors.black.base};
    }
  }
`;

export default headroom;
