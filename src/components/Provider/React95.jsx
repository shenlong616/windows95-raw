// https://storybook.react95.io/?path=/story/docs-getting-started--page
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import themes from "react95/dist/themes";
import { useLeva } from "../../hooks/useLeva";

const GlobalStyle = {
  StyleReset: createGlobalStyle`${styleReset}`,
  CustomFont: createGlobalStyle`
    @font-face {
      font-family: "ms_sans_serif";
      src: url("${ms_sans_serif}") format("woff2");
      font-weight: 400;
      font-style: normal;
      font-display: fallback;
    }

    @font-face {
      font-family: "ms_sans_serif";
      src: url("${ms_sans_serif_bold}") format("woff2");
      font-weight: bold;
      font-style: normal;
      font-display: fallback;
    }

    * {
      font-family: "ms_sans_serif" !important;
    }
  `,
};

export function React95({ children }) {
  const { control1 } = useLeva();
  const { theme, font } = control1();

  return (
    <>
      <GlobalStyle.StyleReset />
      {font ? <GlobalStyle.CustomFont /> : undefined}
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </>
  );
}
