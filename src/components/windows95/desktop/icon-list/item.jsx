import { Styled } from "@/components/styled";
import { useLeva } from "@/hooks/use-leva";
import { clsx } from "clsx";
import { Draggable } from "@/components/draggable";
import { Icon } from "@/components/windows95/icon";

export function Item({ iconName, title }) {
  let { control2 } = useLeva();
  control2 = control2();

  return (
    <Draggable>
      <div className="group flex flex-col items-center">
        <Icon
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
    </Draggable>
  );
}
