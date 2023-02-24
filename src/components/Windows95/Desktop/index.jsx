import { _ } from "./_";
import { Styled } from "../../Styled";
import { clsx } from "clsx";
import { useLeva } from "../../../hooks/useLeva";

function Desktop() {
  const { control1 } = useLeva();
  const { taskbar } = control1();

  return (
    <Styled.Theme cssPropName="background-color" colorName="desktopBackground">
      <div
        className={clsx({
          "flex max-h-screen min-h-screen": true,
          "flex-col": taskbar === "bottom",
          "flex-col-reverse": taskbar === "top",
        })}
      >
        <div className="grow overflow-auto p-6">
          <_.IconList />
        </div>
        <_.Taskbar />
        {/* <div className="absolute flex h-full w-full flex-col items-center justify-center">
            center element
          </div> */}
      </div>
    </Styled.Theme>
  );
}

export { Desktop, _ as Desktop_ };
