import { Button, MenuList, MenuListItem, Separator } from "react95";
import { useState } from "react";
import { Windows95 } from "@/components/windows95";
import { useLeva } from "@/hooks/use-leva";
import { clsx } from "clsx";

export function ASide() {
  const [state1, setState1] = useState(false);
  const { control1 } = useLeva();
  const { taskbar } = control1();

  return (
    <>
      <Button onClick={() => setState1(!state1)} active={state1}>
        <Windows95.Icon name="User1_16x16_4" className="mr-1" />
        <span className="text-sm font-bold">Start</span>
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
            <MenuListItem>
              <Windows95.Icon name="Ie_16x16_8" className="mr-2" />
              <span className="text-sm">Internet Explorer</span>
            </MenuListItem>
            <MenuListItem>
              <Windows95.Icon name="Regedit_16x16_4" className="mr-2" />
              <span className="text-sm">Regedit</span>
            </MenuListItem>
            <Separator />
            <MenuListItem disabled>
              <Windows95.Icon name="PowerOff_16x16_4" className="mr-2" />
              <span className="text-sm">Shut down</span>
            </MenuListItem>
          </MenuList>
        </div>
      ) : undefined}
    </>
  );
}
