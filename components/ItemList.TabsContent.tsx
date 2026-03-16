import { Item, Tab } from "@/lib/types";
import { TabsContent } from "@/components/ui/tabs";
import ItemListItem from "./ItemList.Item";
import { tabs } from "@/lib/constants";
import useFilteredItems from "@/lib/hooks/useFilteredItems";

interface Props {
  items: Item[];
  activeTab: Tab;
}

export default function ItemListTabsContent({ items, activeTab }: Props) {
  const filteredItems = useFilteredItems({
    items,
    tab: activeTab.value,
  });
  return tabs.map((tab) => (
    <TabsContent
      key={tab.value}
      value={tab.value}
      className='flex flex-col gap-5'
    >
      {filteredItems.map((item) => (
        <ItemListItem key={item.id} item={item} />
      ))}
    </TabsContent>
  ));
}
