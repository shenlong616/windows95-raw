import { useEffect, useState } from "react";
import { Uncategorized } from "../../../../Uncategorized";

export function Clock() {
  const localeTime = () =>
    `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(
      2,
      "0"
    )}`;
  const [state1, setState1] = useState(localeTime);

  useEffect(() => {
    const idInterval = setInterval(() => setState1(localeTime));

    return () => clearInterval(idInterval);
  }, []);

  return <Uncategorized.Text sm>{state1}</Uncategorized.Text>;
}
