import { clsx } from "clsx";

export function Text({ children, sm }) {
  return <span className={clsx({ "text-sm": sm })}>{children}</span>;
}
