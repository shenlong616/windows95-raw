import { useControls, button } from "leva";

export function GitHub({ url }) {
  useControls({
    GitHub: button(() => window.open(url, "_blank")),
  });
}
