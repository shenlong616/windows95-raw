import { Desktop } from "./Desktop";
import { Provider } from "../Provider";

export default function Windows95() {
  return (
    <Provider.React95>
      <Desktop />
    </Provider.React95>
  );
}
