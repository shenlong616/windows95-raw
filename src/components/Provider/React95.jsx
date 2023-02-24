// https://storybook.react95.io/?path=/story/docs-getting-started--page
import { ThemeProvider } from "styled-components";
import themes from "react95/dist/themes";
import { useLeva } from "../../hooks/useLeva";
import { GlobalStyle } from "../GlobalStyle";

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
