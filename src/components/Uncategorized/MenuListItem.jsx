import { MenuListItem as MenuListItem_ } from "react95";
import Windows95 from "../Windows95";

export function MenuListItem({ iconName, title, ...rest }) {
  return (
    <MenuListItem_ {...rest}>
      <Windows95.Icon iconName={iconName} className="mr-2" />
      <Windows95.Text sm>{title}</Windows95.Text>
    </MenuListItem_>
  );
}
