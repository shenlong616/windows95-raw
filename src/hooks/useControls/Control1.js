import { useControls } from "leva";
import themes from "react95/dist/themes";

export function Control1() {
  return useControls("react95", {
    theme: {
      value: "original",
      options: Object.keys(themes),
    },
    taskbarPosition: {
      value: "bottom",
      options: ["top"],
    },
    customFont: true,
  });
}
