import ItemList from "@/components/ItemList";
import { prisma } from "@/lib/prisma";
import { type Item as ItemType } from "@/lib/types";

export default async function Home() {
  const items = (await prisma.item.findMany({
    orderBy: { createdAt: "desc" },
  })) as ItemType[];

  return <main className='p-5'>{/*<ItemList items={items} />*/}</main>;
}
