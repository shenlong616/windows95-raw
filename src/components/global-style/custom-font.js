import { createGlobalStyle } from "styled-components";

export const CustomFont = createGlobalStyle`
  @font-face {
    font-family: "ms_sans_serif";
    src: url("fonts/ms_sans_serif.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "ms_sans_serif";
    src: url("fonts/ms_sans_serif_bold.woff2") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }

  * {
    font-family: "ms_sans_serif" !important;
  }
`;
