import Draggable_ from "react-draggable";
import { useRef, useState } from "react";
import { useControls } from "../../hooks/useControls";
import { clsx } from "clsx";

export function Draggable({ children }) {
  const ref1 = useRef();
  const [state1, setState1] = useState();
  const { control2 } = useControls();
  const { disabled } = control2();

  return (
    <Draggable_
      nodeRef={ref1}
      disabled={disabled}
      onStart={() => setState1(true)}
      onStop={() => setState1(false)}
    >
      <div
        ref={ref1}
        // https://github.com/react-grid-layout/react-draggable#draggable-props
        // Note that sending className, style, or transform as properties will error - set them on the child element directly.
        className={clsx({
          [state1 ? "cursor-grabbing" : "cursor-grab"]: !disabled,
        })}
      >
        {children}
      </div>
    </Draggable_>
  );
}
