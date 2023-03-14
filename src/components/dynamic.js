import dynamic from "next/dynamic";

const StyleReset = dynamic(() =>
  import("@/components/global-style").then((mod) => mod.GlobalStyle.StyleReset)
);

export function Dynamic() {}

Object.assign(Dynamic, { GlobalStyle: { StyleReset } });
