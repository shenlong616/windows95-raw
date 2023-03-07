import { Frame } from "react95";
import { Clock } from "@/components/windows95/taskbar/clock";
import { Icon } from "@/components/windows95/icon";
import { AnimatedIcon } from "@/components/windows95/animated-icon";

export function BSide() {
  return (
    <Frame variant="status">
      <div className="flex min-w-[6rem] flex-row items-center justify-center gap-2 py-1 text-sm">
        <Icon name="Fax_16x16_4" />
        <AnimatedIcon
          iconName1="Lights101_16x16_4"
          iconName2="Lights102_16x16_4"
        />
        <Clock />
      </div>
    </Frame>
  );
}
