import { Frame } from "react95";
import { Text } from "@/components/text";
import { Icon } from "@/components/windows95/icon";

export function BSide() {
  return (
    <Frame variant="status">
      <div className="flex min-w-[6rem] flex-row items-center justify-center gap-2 py-1 text-sm">
        <Icon name="Fax_16x16_4" />
        <Icon.Animate
          iconName1="Lights101_16x16_4"
          iconName2="Lights102_16x16_4"
        />
        <Text.Clock />
      </div>
    </Frame>
  );
}
