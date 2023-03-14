import dynamic from "next/dynamic";

const StyleReset = dynamic(() =>
  import("@/components/global-style").then(
    (module) => module.GlobalStyle.StyleReset
  )
);

export function Dynamic() {}

Object.assign(Dynamic, { GlobalStyle: { StyleReset } });
