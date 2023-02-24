import { MenuListItem as MenuListItem_ } from "react95";
import { Uncategorized } from "./index";

export function MenuListItem({ iconName, title, ...rest }) {
  return (
    <MenuListItem_ {...rest}>
      <Uncategorized.Icon iconName={iconName} className="mr-2" />
      <Uncategorized.Text sm>{title}</Uncategorized.Text>
    </MenuListItem_>
  );
}
