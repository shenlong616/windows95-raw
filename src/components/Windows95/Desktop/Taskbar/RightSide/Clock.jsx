import { useLayoutEffect, useState } from "react";
import { useUtils } from "../../../../../hooks/useUtils";
import { Windows95_ } from "../../../index";

export function Clock() {
  const { formatTime } = useUtils();
  const localeTime = () =>
    `${new Date().getHours()}:${formatTime(new Date().getMinutes())}`;
  const [state1, setState1] = useState(localeTime);

  useLayoutEffect(() => {
    const idInterval = setInterval(() => setState1(localeTime));

    return () => clearInterval(idInterval);
  }, []);

  return <Windows95_.Text sm>{state1}</Windows95_.Text>;
}
