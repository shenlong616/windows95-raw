import { _ } from "./_";
import { Provider } from "../Provider";

function Windows95() {
  return (
    <Provider.React95>
      <_.Desktop />
    </Provider.React95>
  );
}

export { Windows95 as default, _ as Windows95_ };
