import { Styled } from "../../Styled";
import { clsx } from "clsx";
import { useLeva } from "../../../hooks/useLeva";
import { IconList } from "./IconList";
import { Taskbar } from "./Taskbar";

export function Desktop() {
  const { control1 } = useLeva();
  const { taskbar } = control1();

  return (
    <Styled.Div cssPropName="background-color" colorName="desktopBackground">
      <div
        className={clsx({
          "flex max-h-screen min-h-screen": true,
          "flex-col": taskbar === "bottom",
          "flex-col-reverse": taskbar === "top",
        })}
      >
        <div className="grow overflow-auto p-6">
          <IconList />
        </div>
        <Taskbar />
        {/* <div className="absolute flex h-full w-full flex-col items-center justify-center">
            center element
          </div> */}
      </div>
    </Styled.Div>
  );
}
