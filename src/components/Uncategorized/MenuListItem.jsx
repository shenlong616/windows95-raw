import { MenuListItem as MenuListItem_ } from "react95";
import { Windows95_ } from "../Windows95";

export function MenuListItem({ iconName, title, disabled }) {
  return (
    <MenuListItem_ disabled={disabled}>
      <Windows95_.Icon iconName={iconName} className="mr-2" />
      <Windows95_.Text sm>{title}</Windows95_.Text>
    </MenuListItem_>
  );
}
