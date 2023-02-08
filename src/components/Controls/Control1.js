import { useControls, button } from "leva";

export function Control1() {
  useControls({
    GitHub: button(() =>
      window.open("https://github.com/shenlong616/windows95-raw", "_blank")
    ),
  });

  return;
}
