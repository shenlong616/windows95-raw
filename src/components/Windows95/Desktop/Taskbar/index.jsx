import { AppBar, Toolbar } from "react95";
import { RightSide } from "./RightSide";
import { LeftSide } from "./LeftSide";

export function Taskbar() {
  return (
    <AppBar position="unset" as="div">
      <Toolbar className="justify-between">
        <LeftSide />
        <RightSide />
      </Toolbar>
    </AppBar>
  );
}
