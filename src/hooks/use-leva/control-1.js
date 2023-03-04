import { useControls } from "leva";
import themes from "react95/dist/themes";

export function control1() {
  return useControls(
    "react95",
    {
      font: true,
      theme: {
        value: "original",
        options: Object.keys(themes),
      },
      taskbar: {
        options: ["bottom", "top"],
      },
    },
    { color: "yellow" }
  );
}
