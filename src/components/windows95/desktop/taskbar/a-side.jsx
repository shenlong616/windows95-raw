import { Button, MenuList, MenuListItem, Separator } from "react95";
import { useState } from "react";
import { useLeva } from "@/hooks/use-leva";
import { clsx } from "clsx";
import { Icon } from "@/components/windows95/icon";

export function ASide() {
  const [state1, setState1] = useState(false);
  let { control1 } = useLeva();
  control1 = control1();

  return (
    <>
      <Button onClick={() => setState1(!state1)} active={state1}>
        <Icon name="User1_16x16_4" className="mr-1" />
        <span className="text-sm font-bold">Start</span>
      </Button>
      {state1 ? (
        <div
          className={clsx({
            "absolute left-0": true,
            "bottom-full": control1.taskbar === "bottom",
            "top-full": control1.taskbar === "top",
          })}
        >
          <MenuList onClick={() => setState1(false)}>
            <MenuListItem>
              <Icon name="Ie_16x16_8" className="mr-2" />
              <span className="text-sm">Internet Explorer</span>
            </MenuListItem>
            <MenuListItem>
              <Icon name="Regedit_16x16_4" className="mr-2" />
              <span className="text-sm">Regedit</span>
            </MenuListItem>
            <Separator />
            <MenuListItem disabled>
              <Icon name="PowerOff_16x16_4" className="mr-2" />
              <span className="text-sm">Shut down</span>
            </MenuListItem>
          </MenuList>
        </div>
      ) : undefined}
    </>
  );
}
