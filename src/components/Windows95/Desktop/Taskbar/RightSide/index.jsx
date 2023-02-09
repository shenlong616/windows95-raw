import { Frame } from "react95";
import { _ } from "./_";
import { Windows95_ } from "../../index";
import { Uncategorized_ } from "../../../Uncategorized";

function RightSide() {
  return (
    <Frame variant="status">
      <div className="flex min-w-[6rem] flex-row items-center justify-center gap-2 p-1">
        <Windows95_.Icon iconName="Fax_16x16_4" />
        <Uncategorized_.Icon
          iconName1="Lights101_16x16_4"
          iconName2="Lights102_16x16_4"
        />
        <_.Clock />
      </div>
    </Frame>
  );
}

export { RightSide, _ as RightSide_ };