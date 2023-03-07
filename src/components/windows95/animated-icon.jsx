import { useEffect, useState } from "react";
import { Icon } from "@/components/windows95/icon";

export function AnimatedIcon({ iconName1, iconName2 }) {
  const [state1, setState1] = useState(true);

  useEffect(() => {
    const idTimeout = setTimeout(() => setState1(!state1), 1e3);

    return () => clearTimeout(idTimeout);
  }, [state1]);

  return <Icon name={state1 ? iconName1 : iconName2} />;
}
