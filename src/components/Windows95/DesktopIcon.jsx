import { _ } from "./_";

export function DesktopIcon() {
  return (
    // https://codepen.io/rachelandrew/pen/QbewmG
    <div className="grid auto-cols-max grid-flow-col grid-rows-6 gap-11">
      <_.DesktopIconItem iconName="Computer_32x32_4" title="My Computer" />
      <_.DesktopIconItem iconName="RecycleEmpty_32x32_4" title="Recycle Bin" />
      <_.DesktopIconItem iconName="Mspaint_32x32_4" title="Paint" />
      <_.DesktopIconItem iconName="Freecell1_32x32_4" title="FreeCell" />
      <_.DesktopIconItem iconName="Folder_32x32_4" title="New folder" />
    </div>
  );
}
