import { useControls } from "leva";

export function control2() {
  return useControls("react-draggable", {
    disabled: false,
  });
}
