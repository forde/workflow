"use client";
import { HTMLAttributes, useState } from "react";
import { type Item as ItemType } from "@/lib/types";
import { Tabs } from "@/components/ui/tabs";
import AddItem from "@/components/AddItem";
import ItemListTabsContent from "./ItemList.TabsContent";
import ItemListTabs from "./ItemList.Tabs";
import ItemListTitle from "./ItemList.Title";
import { tabs } from "@/lib/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: ItemType[];
}

export default function ItemList({ items }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[4]);

  return (
    <Tabs
      value={activeTab.value}
      onValueChange={(v) =>
        setActiveTab(tabs.find((t) => t.value === v) || tabs[0])
      }
    >
      <div className='flex gap-5 items-center mb-5'>
        <AddItem />
        <ItemListTabs items={items} />
      </div>
      <ItemListTitle activeTab={activeTab} items={items} />
      <ItemListTabsContent activeTab={activeTab} items={items} />
    </Tabs>
  );
}
