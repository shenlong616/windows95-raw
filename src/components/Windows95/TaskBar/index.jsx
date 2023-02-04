import { AppBar, Toolbar } from "react95";
import { _ } from "./_";

function TaskBar() {
  return (
    <AppBar position="unset" as="div">
      <Toolbar className="justify-between">
        <_.LeftSide />
        <_.RightSide />
      </Toolbar>
    </AppBar>
  );
}

export { TaskBar, _ as TaskBar_ };
