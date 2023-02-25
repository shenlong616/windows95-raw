import { Styled } from "../../Styled";
import { Uncategorized } from "../../Uncategorized";
import { useLeva } from "../../../hooks/useLeva";
import { clsx } from "clsx";

export function IconListItem({ iconName, title }) {
  const { control2 } = useLeva();
  const { disabled } = control2();

  return (
    <Uncategorized.Draggable>
      <div className="group flex flex-col items-center">
        <Uncategorized.Icon
          name={iconName}
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
            <Uncategorized.Text sm>{title}</Uncategorized.Text>
          </span>
        </Styled.Div>
      </div>
    </Uncategorized.Draggable>
  );
}
