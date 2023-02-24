import { Styled } from "../../../Styled";
import { Uncategorized } from "../../../Uncategorized";
import { useLeva } from "../../../../hooks/useLeva";
import { clsx } from "clsx";
import Windows95 from "../../index";

export function Item({ iconName, title }) {
  const { control2 } = useLeva();
  const { disabled } = control2();

  return (
    <Uncategorized.Draggable>
      <div className="group flex flex-col items-center">
        <Windows95.Icon
          iconName={iconName}
          className={clsx({ "group-hover:invert": !disabled, "mb-1": true })}
        />
        <Styled.Div cssPropName="color" colorName="canvasTextInvert">
          <span
            className={clsx({
              "border border-dotted border-transparent px-1 py-px": true,
              "select-none group-hover:border-yellow-300 group-hover:bg-blue-900 group-hover:text-white":
                !disabled,
            })}
          >
            <Windows95.Text sm>{title}</Windows95.Text>
          </span>
        </Styled.Div>
      </div>
    </Uncategorized.Draggable>
  );
}
