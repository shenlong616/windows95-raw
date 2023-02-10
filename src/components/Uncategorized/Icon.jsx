import { Windows95_ } from "../Windows95";
import { useEffect, useState } from "react";

export function Icon({ iconName1, iconName2 }) {
  const [state1, setState1] = useState(true);

  useEffect(() => {
    const idTimeout = setTimeout(() => setState1(!state1), 1e3);

    return () => clearTimeout(idTimeout);
  }, [state1]);

  return <Windows95_.Icon iconName={state1 ? iconName1 : iconName2} />;
}
