import { _ } from "./_";

export function IconList() {
  return (
    // https://codepen.io/rachelandrew/pen/QbewmG
    <div className="grid auto-cols-max grid-flow-col grid-rows-6 gap-11">
      <_.IconListItem iconName="Computer_32x32_4" title="My Computer" />
      <_.IconListItem iconName="RecycleEmpty_32x32_4" title="Recycle Bin" />
      <_.IconListItem iconName="Mspaint_32x32_4" title="Paint" />
      <_.IconListItem iconName="Freecell1_32x32_4" title="FreeCell" />
      <_.IconListItem iconName="Folder_32x32_4" title="New folder" />
    </div>
  );
}
