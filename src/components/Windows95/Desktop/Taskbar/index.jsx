import { AppBar, Toolbar } from "react95";
import { _ } from "./_";

function Taskbar() {
  return (
    <AppBar position="unset" as="div">
      <Toolbar className="justify-between">
        <_.LeftSide />
        <_.RightSide />
      </Toolbar>
    </AppBar>
  );
}

export { Taskbar, _ as Taskbar_ };
