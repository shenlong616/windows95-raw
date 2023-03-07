import localFont from "next/font/local";
import { useLeva } from "@/hooks/use-leva";

const msSansSerif = localFont({
  src: [
    {
      path: "./ms_sans_serif.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ms_sans_serif_bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export function MsSansSerif({ children }) {
  let { control1 } = useLeva();
  control1 = control1();

  return (
    <div className={control1.font ? msSansSerif.className : undefined}>
      {children}
    </div>
  );
}
