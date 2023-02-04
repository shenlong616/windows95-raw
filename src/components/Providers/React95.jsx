// https://storybook.react95.io/?path=/story/docs-getting-started--page
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import themes from "react95/dist/themes";
import { useControls } from "../../hooks/useControls";

const GlobalStyle1 = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }
  * {
    font-family: 'ms_sans_serif' !important;
  }
  ${styleReset}
`;

const GlobalStyle2 = createGlobalStyle`${styleReset}`;

export function React95({ children }) {
  const { Control1 } = useControls();
  const { theme, customFont } = Control1();

  return (
    <>
      {customFont ? <GlobalStyle1 /> : <GlobalStyle2 />}
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </>
  );
}
