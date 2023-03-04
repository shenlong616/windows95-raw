import { Frame } from "react95";
import { Clock } from "@/components/windows95/desktop/taskbar/clock";
import { Windows95 } from "@/components/windows95";

export function BSide() {
  return (
    <Frame variant="status">
      <div className="flex min-w-[6rem] flex-row items-center justify-center gap-2 p-1 text-sm">
        <Windows95.Icon name="Fax_16x16_4" />
        <Windows95.AnimatedIcon
          iconName1="Lights101_16x16_4"
          iconName2="Lights102_16x16_4"
        />
        <Clock />
      </div>
    </Frame>
  );
}
