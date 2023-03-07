import styles from "@/styles/Home.module.css";
import { Desktop } from "@/components/windows95/desktop";
import { Styled } from "@/components/styled";
import { clsx } from "clsx";
import { useLeva } from "@/hooks/use-leva";

export default function Home() {
  let { control1 } = useLeva();
  control1 = control1();

  return (
    <Styled.Div cssPropName="background-color" colorName="desktopBackground">
      <div
        className={clsx({
          "flex max-h-screen min-h-screen": true,
          "flex-col": control1.taskbar === "bottom",
          "flex-col-reverse": control1.taskbar === "top",
        })}
      >
        <div className="grow overflow-auto p-6">
          <Desktop.IconList />
        </div>
        <Desktop.Taskbar />
        {/* <div className="absolute flex h-full w-full flex-col items-center justify-center">
            center element
          </div> */}
      </div>
    </Styled.Div>
  );
}
