import { Styled } from "@/components/styled";
import { Uncategorized } from "@/components/uncategorized";
import { useLeva } from "@/hooks/use-leva";
import { clsx } from "clsx";
import { Windows95 } from "@/components/windows95";

export function IconListItem({ iconName, title }) {
  let { control2 } = useLeva();
  control2 = control2();

  return (
    <Uncategorized.Draggable>
      <div className="group flex flex-col items-center">
        <Windows95.Icon
          name={iconName}
          className={clsx({
            "group-hover:invert": !control2.disabled,
            "mb-1": true,
          })}
        />
        <Styled.Div cssPropName="color" colorName="canvasTextInvert">
          <span
            className={clsx({
              "border border-dotted border-transparent px-1 py-px text-sm": true,
              "select-none group-hover:border-yellow-300 group-hover:bg-blue-900 group-hover:text-white":
                !control2.disabled,
            })}
          >
            {title}
          </span>
        </Styled.Div>
      </div>
    </Uncategorized.Draggable>
  );
}
