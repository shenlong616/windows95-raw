import { useControls, button } from "leva";

export function GitHub() {
  useControls({
    GitHub: button(() =>
      window.open("https://github.com/shenlong616/windows95-raw", "_blank")
    ),
  });

  return;
}
