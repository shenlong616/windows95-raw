import { control1 } from "./control1";
import { control2 } from "./control2";

export function useLeva() {
  return Object.assign({}, { control1, control2 });
}
