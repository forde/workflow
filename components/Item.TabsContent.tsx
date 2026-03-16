import { Item as ItemType } from "@/lib/types";
import { TabsContent } from "@/components/ui/tabs";
import Item from "./Item";
import { tabs } from "@/lib/constants";

interface Props {
  items: ItemType[];
}

export default function ItemTabsContent({ items }: Props) {
  return tabs.map((tab) => (
    <TabsContent
      key={tab.value}
      value={tab.value}
      className='flex flex-col gap-5 pt-4'
    >
      {items
        .filter((item) =>
          tab.value === "all" ? true : item.status == tab.value,
        )
        .map((item) => (
          <Item key={item.id} item={item as ItemType} />
        ))}
    </TabsContent>
  ));
}
