import Windows95 from "../Windows95";
import { useEffect, useState } from "react";

export function AnimatedIcon({ iconName1, iconName2 }) {
  const [state1, setState1] = useState(true);

  useEffect(() => {
    const idTimeout = setTimeout(() => setState1(!state1), 1e3);

    return () => clearTimeout(idTimeout);
  }, [state1]);

  return <Windows95.Icon iconName={state1 ? iconName1 : iconName2} />;
}
