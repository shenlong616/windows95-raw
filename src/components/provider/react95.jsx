// https://storybook.react95.io/?path=/story/docs-getting-started--page
import { ThemeProvider } from "styled-components";
import themes from "react95/dist/themes";
import { useLeva } from "@/hooks/use-leva";

export function React95({ children }) {
  let { control1 } = useLeva();
  control1 = control1();

  return (
    <ThemeProvider theme={themes[control1.theme]}>{children}</ThemeProvider>
  );
}
