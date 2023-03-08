import "@react95/icons/icons.css";
import { clsx } from "clsx";
import { Animate } from "@/components/windows95/icon/animate";

// https://react95.github.io/React95/?path=/story/icon--all
export function Icon({ name, className }) {
  return (
    <span
      className={clsx({ [name]: true, [className]: className })}
      role="img"
    />
  );
}

Object.assign(Icon, { Animate });
