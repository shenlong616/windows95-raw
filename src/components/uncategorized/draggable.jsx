import Draggable_ from "react-draggable";
import { useRef, useState } from "react";
import { useLeva } from "@/hooks/use-leva";
import { clsx } from "clsx";

export function Draggable({ children, ...rest }) {
  const ref1 = useRef();
  const [state1, setState1] = useState();
  let { control2 } = useLeva();
  control2 = control2();

  return (
    <Draggable_
      // https://github.com/react-grid-layout/react-draggable#draggable-props
      // Note that sending className, style, or transform as properties will error - set them on the child element directly.
      {...rest}
      nodeRef={ref1}
      disabled={disabled}
      onStart={() => setState1(true)}
      onStop={() => setState1(false)}
    >
      <div
        ref={ref1}
        className={clsx({
          [state1 ? "cursor-grabbing" : "cursor-grab"]: !control2.disabled,
        })}
      >
        {children}
      </div>
    </Draggable_>
  );
}
