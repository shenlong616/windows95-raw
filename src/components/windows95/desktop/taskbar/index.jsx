import { AppBar, Toolbar } from "react95";
import { ASide } from "@/components/windows95/desktop/taskbar/a-side";
import { BSide } from "@/components/windows95/desktop/taskbar/b-side";

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
