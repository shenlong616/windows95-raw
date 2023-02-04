import "@react95/icons/icons.css";
import { clsx } from "clsx";

export function Icon({ iconName, className }) {
  return (
    <span
      className={clsx({ [iconName]: true, [className]: className })}
      role="img"
    />
  );
}
