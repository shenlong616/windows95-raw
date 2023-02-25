import { Desktop } from "./desktop";
import { Provider } from "../provider";

export default function Windows95() {
  return (
    <Provider.React95>
      <Desktop />
    </Provider.React95>
  );
}
