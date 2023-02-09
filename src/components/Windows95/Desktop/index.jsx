import { _ } from "./_";
import { Styled_ } from "../../Styled";
import { clsx } from "clsx";
import { useControls } from "../../../hooks/useControls";

function Desktop() {
  const { control1 } = useControls();
  const { taskbar } = control1();

  return (
    <Styled_.Theme
      cssPropName="background-color"
      themeColorName="desktopBackground"
    >
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
    </Styled_.Theme>
  );
}

export { Desktop, _ as Desktop_ };
