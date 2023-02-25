import { AppBar, Toolbar } from "react95";
import { ASide } from "./a-side";
import { BSide } from "./b-side";

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
