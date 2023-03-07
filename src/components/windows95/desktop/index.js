import { IconList } from "@/components/windows95/desktop/icon-list";
import { Taskbar } from "@/components/windows95/desktop/taskbar";

export function Desktop() {}

Object.assign(Desktop, { IconList, Taskbar });

IconList.displayName = "Desktop.IconList";
Taskbar.displayName = "Desktop.Taskbar";
