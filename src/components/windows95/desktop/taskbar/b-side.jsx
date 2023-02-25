import { Frame } from "react95";
import { Uncategorized } from "../../../uncategorized";
import { Clock } from "./clock";

export function BSide() {
  return (
    <Frame variant="status">
      <div className="flex min-w-[6rem] flex-row items-center justify-center gap-2 p-1">
        <Uncategorized.Icon name="Fax_16x16_4" />
        <Uncategorized.AnimatedIcon
          iconName1="Lights101_16x16_4"
          iconName2="Lights102_16x16_4"
        />
        <Clock />
      </div>
    </Frame>
  );
}
