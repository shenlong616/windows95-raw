import { Desktop } from "./Desktop";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { Provider } from "../Provider";

export default function Windows95() {
  return (
    <Provider.React95>
      <Windows95.Desktop />
    </Provider.React95>
  );
}

Object.assign(Windows95, { Desktop, Icon, Text });
