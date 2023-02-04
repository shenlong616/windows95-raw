import { useControls } from "leva";

export function Control2() {
  return useControls("react-draggable", {
    disabled: false,
  });
}
