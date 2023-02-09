import { _ } from "./_";

function IconList() {
  return (
    // https://codepen.io/rachelandrew/pen/QbewmG
    <div className="grid auto-cols-max grid-flow-col grid-rows-6 gap-11">
      <_.Item iconName="Computer_32x32_4" title="My Computer" />
      <_.Item iconName="RecycleEmpty_32x32_4" title="Recycle Bin" />
      <_.Item iconName="Mspaint_32x32_4" title="Paint" />
      <_.Item iconName="Freecell1_32x32_4" title="FreeCell" />
      <_.Item iconName="Folder_32x32_4" title="New folder" />
    </div>
  );
}

export { IconList, _ as IconList_ };
