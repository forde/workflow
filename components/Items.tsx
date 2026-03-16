import { HTMLAttributes } from "react";
import { prisma } from "@/lib/prisma";
import { type Item as ItemType } from "@/lib/types";
import { Tabs } from "@/components/ui/tabs";
import AddItem from "@/components/AddItem";
import ItemTabsContent from "./Item.TabsContent";
import ItemTabs from "./Item.Tabs";
interface Props extends HTMLAttributes<HTMLDivElement> {
  status?: ItemType["status"];
  points?: ItemType["points"];
  board?: ItemType["board"];
}

export default async function Items({ status, points, board }: Props) {
  const items = (await prisma.item.findMany({
    orderBy: { createdAt: "desc" },
    where: { status, points, board },
  })) as ItemType[];

  return (
    <Tabs defaultValue='active' className=''>
      <div className='flex gap-5 items-center'>
        <AddItem />
        <ItemTabs />
      </div>
      <ItemTabsContent items={items} />
    </Tabs>
  );
}
