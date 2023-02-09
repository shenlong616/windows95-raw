import { Styled_ } from "../Styled";
import { Uncategorized_ } from "../Uncategorized";
import { useControls } from "../../hooks/useControls";
import { clsx } from "clsx";
import { Windows95_ } from "../index";

export function IconListItem({ iconName, title }) {
  const { control2 } = useControls();
  const { disabled } = control2();

  return (
    <Uncategorized_.Draggable>
      <div className="group flex flex-col items-center">
        <Windows95_.Icon
          iconName={iconName}
          className={clsx({ "group-hover:invert": !disabled, "mb-1": true })}
        />
        <Styled_.Theme cssPropName="color" themeColorName="canvasTextInvert">
          <span
            className={clsx({
              "border border-dotted border-transparent px-1 py-px": true,
              "select-none group-hover:border-yellow-300 group-hover:bg-blue-900 group-hover:text-white":
                !disabled,
            })}
          >
            <Windows95_.Text sm>{title}</Windows95_.Text>
          </span>
        </Styled_.Theme>
      </div>
    </Uncategorized_.Draggable>
  );
}
