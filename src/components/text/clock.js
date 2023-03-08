import { useEffect, useState } from "react";

const localeTime = () =>
  `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(
    2,
    "0"
  )}`;

export function Clock() {
  const [state1, setState1] = useState(localeTime);

  useEffect(() => {
    const idInterval = setInterval(() => setState1(localeTime));

    return () => clearInterval(idInterval);
  }, []);

  return state1;
}
