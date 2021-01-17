import { styled } from "twin.macro";

type GradientProp = {
  gr1?: string;
  gr2?: string;
  gr3?: string;
};

export const GradientP = styled.p<GradientProp>`
  background: ${({ gr1, gr2, gr3 }) =>
    `linear-gradient(to right, #${gr1}, #${gr2}, #${gr3})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
