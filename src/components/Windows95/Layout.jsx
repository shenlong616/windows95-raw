import { _ } from "./_";
import { Styled_ } from "../Styled";
import { clsx } from "clsx";
import { useControls } from "../../hooks/useControls";

export function Layout({ children }) {
  const { Control1 } = useControls();
  const { taskbarPosition } = Control1();

  return (
    <Styled_.Theme cssPropName="background-color" colorName="desktopBackground">
      <div
        className={clsx({
          "flex max-h-screen min-h-screen": true,
          "flex-col": taskbarPosition === "bottom",
          "flex-col-reverse": taskbarPosition === "top",
        })}
      >
        <div className="grow overflow-auto p-6">{children}</div>
        <_.TaskBar />
        {/* <div className="absolute flex h-full w-full flex-col items-center justify-center">
          center element
        </div> */}
      </div>
    </Styled_.Theme>
  );
}
