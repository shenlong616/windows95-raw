import "@react95/icons/icons.css";
import { clsx } from "clsx";

// https://react95.github.io/React95/?path=/story/icon--all
export function Icon({ iconName, className }) {
  return (
    <span
      className={clsx({ [iconName]: true, [className]: className })}
      role="img"
    />
  );
}
