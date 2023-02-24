import { Button, MenuList, Separator } from "react95";
import { useState } from "react";
import { Uncategorized } from "../../../Uncategorized";
import Windows95 from "../../index";
import { useLeva } from "../../../../hooks/useLeva";
import { clsx } from "clsx";

export function LeftSide() {
  const [state1, setState1] = useState(false);
  const { control1 } = useLeva();
  const { taskbar } = control1();

  return (
    <>
      <Button
        onClick={() => setState1(!state1)}
        active={state1}
        className="font-bold"
      >
        <Windows95.Icon iconName="User1_16x16_4" className="mr-1" />
        <Windows95.Text sm>Start</Windows95.Text>
      </Button>
      {state1 ? (
        <div
          className={clsx({
            "absolute left-0": true,
            "bottom-full": taskbar === "bottom",
            "top-full": taskbar === "top",
          })}
        >
          <MenuList onClick={() => setState1(false)}>
            <Uncategorized.MenuListItem
              iconName="Ie_16x16_8"
              title="Internet Explorer"
            />
            <Uncategorized.MenuListItem
              iconName="Regedit_16x16_4"
              title="Regedit"
            />
            <Separator />
            <Uncategorized.MenuListItem
              iconName="PowerOff_16x16_4"
              title="Shut down"
              disabled
            />
          </MenuList>
        </div>
      ) : undefined}
    </>
  );
}
