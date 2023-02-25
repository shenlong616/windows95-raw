import { Desktop } from "./Desktop";
import { Provider } from "../provider";

export default function Windows95() {
  return (
    <Provider.React95>
      <Desktop />
    </Provider.React95>
  );
}
