import { AppBar, Toolbar } from "react95";
import { ASide } from "./ASide";
import { BSide } from "./BSide";

export function Taskbar() {
  return (
    <AppBar position="unset" as="div">
      <Toolbar className="justify-between">
        <ASide />
        <BSide />
      </Toolbar>
    </AppBar>
  );
}
