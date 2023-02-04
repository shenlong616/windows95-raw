import { Button, MenuList, Separator } from "react95";
import { useState } from "react";
import { Uncategorized_ } from "../../Uncategorized";
import { Windows95_ } from "../index";
import { useControls } from "../../../hooks/useControls";
import { clsx } from "clsx";

export function LeftSide() {
  const [state1, setState1] = useState(false);
  const { Control1 } = useControls();
  const { taskbarPosition } = Control1();

  return (
    <>
      <Button
        onClick={() => setState1(!state1)}
        active={state1}
        className="font-bold"
      >
        <Windows95_.Icon iconName="User1_16x16_4" className="mr-1" />
        <Windows95_.Text sm>Start</Windows95_.Text>
      </Button>
      {state1 ? (
        <div
          className={clsx({
            "absolute left-0": true,
            "bottom-full": taskbarPosition === "bottom",
            "top-full": taskbarPosition === "top",
          })}
        >
          <MenuList onClick={() => setState1(false)}>
            <Uncategorized_.MenuListItem
              iconName="Ie_16x16_8"
              title="Internet Explorer"
            />
            <Uncategorized_.MenuListItem
              iconName="Regedit_16x16_4"
              title="Regedit"
            />
            <Separator />
            <Uncategorized_.MenuListItem
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
