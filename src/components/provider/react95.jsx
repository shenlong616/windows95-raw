// https://storybook.react95.io/?path=/story/docs-getting-started--page
import { ThemeProvider } from "styled-components";
import themes from "react95/dist/themes";
import { useLeva } from "@/hooks/use-leva";
import { GlobalStyle } from "@/components/global-style";

export function React95Provider({ children }) {
  let { control1 } = useLeva();
  control1 = control1();

  return (
    <>
      <GlobalStyle.StyleReset />
      <ThemeProvider theme={themes[control1.theme]}>{children}</ThemeProvider>
    </>
  );
}
