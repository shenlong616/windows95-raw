import { IconListItem } from "@/components/windows95/desktop/icon-list-item";

export function IconList() {
  return (
    // https://codepen.io/rachelandrew/pen/QbewmG
    <div className="grid auto-cols-max grid-flow-col grid-rows-6 gap-11">
      <IconListItem iconName="Computer_32x32_4" title="My Computer" />
      <IconListItem iconName="RecycleEmpty_32x32_4" title="Recycle Bin" />
      <IconListItem iconName="Mspaint_32x32_4" title="Paint" />
      <IconListItem iconName="Freecell1_32x32_4" title="FreeCell" />
      <IconListItem iconName="Folder_32x32_4" title="New folder" />
    </div>
  );
}
